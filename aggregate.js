import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { visit } from 'unist-util-visit'
import fromMarkdown from 'mdast-util-from-markdown'
import toMarkdown from 'mdast-util-to-markdown'
import syntax from 'micromark-extension-gfm'
import gfm from 'mdast-util-gfm'
import date from 'dayjs'

const semverRegex = /(?<version>(?<major>[0-9]+)\.(?<minor>[0-9]+)\.(?<patch>[0-9]+)(?<prerelease>-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?)/

function from(markdown) {
  return fromMarkdown(markdown, {
    extensions: [syntax()],
    mdastExtensions: [gfm.fromMarkdown],
  })
}

function generateHeadingAST(tag, url, releaseDate) {
  return from(`# [${tag}](${url}) (${date(releaseDate).format('YYYY-MM-DD')})`)
}

function formatReleaseContent(tree, metadata) {
  visit(tree, 'heading', (headingNode, index, parent) => {
    visit(headingNode, 'text', node => {
      if (headingNode.depth === 1) {
        if (index === 0 && node.value === 'Change Log') {
          parent.children.splice(
            index,
            1,
            generateHeadingAST(...Object.values(metadata))
          )
        } else {
          headingNode.depth = 2
        }
      }
    })
  })

  return tree
}

function addToChangelog(changelogTree, releaseTree, metadata) {
  visit(changelogTree, 'heading', (headingNode, index, parent) => {
    if (index === 0 && [1, 2].some(level => headingNode.depth === level)) {
      visit(headingNode, 'text', node => {
        if (node.value === 'Change Log') {
          parent.children.splice(
            index + 2, // account for changelog heading and intro paragraph
            0,
            ...formatReleaseContent(releaseTree, metadata).children
          )
        }
      })
    }
  })
}

const outFileTemp = resolve('sample/aggregate-output.md')
const releaseData =
  JSON.parse(await readFile(resolve('data.json'), 'utf-8'))?.data?.repository
    ?.releases?.edges || []
const changelogTree = from(await readFile(resolve('sample/aggregate-input.md')))
for (let { node } of releaseData) {
  if (
    !node.tagName.match(semverRegex).groups.prerelease &&
    !node.name.includes('NOT FOR PRODUCTION')
  ) {
    // aggregate
    addToChangelog(changelogTree, from(node.description), {
      tag: node.name,
      url: `https://github.com/aws-amplify/amplify-cli/releases/tag/${node.tagName}`,
      release: node.createdAt,
    })
  }
}

try {
  const out = toMarkdown(changelogTree, {
    extensions: [gfm.toMarkdown()],
    bullet: '-',
    listItemIndent: '1',
  })
  if (out) await writeFile(outFileTemp, out, 'utf-8')
} catch (error) {
  console.error(error)
}
