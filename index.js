import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import core from '@actions/core'
import lib from '@actions/github'
import { visit } from 'unist-util-visit'
import fromMarkdown from 'mdast-util-from-markdown'
import toMarkdown from 'mdast-util-to-markdown'
import syntax from 'micromark-extension-gfm'
import gfm from 'mdast-util-gfm'
import date from 'dayjs'

const { GitHub, context } = lib

// temporary variables for POC
const changelogPath = resolve('sample/changelog.md')
const releasePath = resolve('sample/release.md')
const outFileTemp = resolve('sample/output.md')
const sampleReleaseTag = '4.5.0'
const sampleReleaseUrl =
  'https://github.com/aws-amplify/amplify-cli/releases/tag/v4.50.0'

function from(markdown) {
  return fromMarkdown(markdown, {
    extensions: [syntax()],
    mdastExtensions: [gfm.fromMarkdown],
  })
}

const changelogTree = from(await readFile(changelogPath))
const releaseTree = from(await readFile(releasePath))

function generateHeadingAST(tag, url, releaseDate) {
  return from(`# [${tag}](${url}) (${date(releaseDate).format('YYYY-MM-DD')})`)
}

function formatReleaseContent(tree) {
  visit(tree, 'heading', (headingNode, index, parent) => {
    visit(headingNode, 'text', node => {
      if (headingNode.depth === 1) {
        if (index === 0 && node.value === 'Change Log') {
          parent.children.splice(
            index,
            1, // replace 'Change Log' heading
            generateHeadingAST(sampleReleaseTag, sampleReleaseUrl, '2020-10-26')
          )
        } else {
          headingNode.depth = 2
        }
      }
    })
  })

  return tree
}

visit(changelogTree, 'heading', (headingNode, index, parent) => {
  if (index === 0 && headingNode.depth === 1) {
    visit(headingNode, 'text', node => {
      if (node.value === 'Change Log') {
        parent.children.splice(
          index + 2, // account for changelog heading and intro paragraph
          0,
          ...formatReleaseContent(releaseTree).children
        )
      }
    })
  }
})

try {
  const out = toMarkdown(changelogTree, {
    extensions: [gfm.toMarkdown()],
    bullet: '-',
    listItemIndent: '1',
  })
  if (out) await writeFile(outFileTemp, out, 'utf-8')
} catch (error) {
  throw new Error('There was an error writing and processing global changelog')
}
