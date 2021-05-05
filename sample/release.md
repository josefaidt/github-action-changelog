# Change Log

This release introduces S3 Server-Side-Encryption by default for all S3 buckets created by the CLI. This has no impact on putting and getting objects from the buckets so there is no impact to existing applications. It does require the `s3:PutEncryptionConfiguration` permission on the IAM Role / User used to deploy with the CLI.

# amplify-category-api [2.31.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-category-api@2.31.3...amplify-category-api@2.31.4) (2021-04-27)

### Bug Fixes

- consolidate REST API IAM policies ([#6904](https://github.com/aws-amplify/amplify-cli/issues/6904)) (ref [#2084](https://github.com/aws-amplify/amplify-cli/issues/2084)) ([5cfff17](https://github.com/aws-amplify/amplify-cli/commit/5cfff173d57ec9ab68984faf2d0f6474eccdcaae))
- handle errors and provide better error message when adding data source ([#7117](https://github.com/aws-amplify/amplify-cli/issues/7117)) (ref [#4384](https://github.com/aws-amplify/amplify-cli/issues/4384)) ([888829b](https://github.com/aws-amplify/amplify-cli/commit/888829ba6f53209ca12d215ed510d5e201d025ee))

# amplify-category-function [2.31.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-category-function@2.31.3...amplify-category-function@2.31.4) (2021-04-27)

### Bug Fixes

- lambdaLayers DependsOn removal ([#7021](https://github.com/aws-amplify/amplify-cli/issues/7021)) (ref [#6435](https://github.com/aws-amplify/amplify-cli/issues/6435) [#5961](https://github.com/aws-amplify/amplify-cli/issues/5961)) ([83c3c3c](https://github.com/aws-amplify/amplify-cli/commit/83c3c3ce3771fc5cb07e58c6e605dce6b547483a))

# amplify-category-storage [2.11.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-category-storage@2.11.3...amplify-category-storage@2.11.4) (2021-04-27)

### Bug Fixes

- mock storage trigger invocation ([#7151](https://github.com/aws-amplify/amplify-cli/issues/7151)) (ref [#7052](https://github.com/aws-amplify/amplify-cli/issues/7052)) ([ad2499b](https://github.com/aws-amplify/amplify-cli/commit/ad2499b983c87de9a71165bffb85d2ee561df70d))

# amplify-cli [4.50.0](https://github.com/aws-amplify/amplify-cli/compare/@aws-amplify/cli@4.49.0...@aws-amplify/cli@4.50.0) (2021-04-27)

### Features

- S3 SSE by default ([#7039](https://github.com/aws-amplify/amplify-cli/issues/7039)) (ref [#5708](https://github.com/aws-amplify/amplify-cli/issues/5708)) ([c1369ed](https://github.com/aws-amplify/amplify-cli/commit/c1369ed6f9c204c89ee2d4c805314a40d6eeaf92))

# amplify-cli-core [1.21.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-cli-core@1.20.1...amplify-cli-core@1.21.0) (2021-04-27)

### Bug Fixes

- frontend flag not honoring passed in framework ([#7126](https://github.com/aws-amplify/amplify-cli/issues/7126)) (ref [#7046](https://github.com/aws-amplify/amplify-cli/issues/7046)) ([1e67fc9](https://github.com/aws-amplify/amplify-cli/commit/1e67fc9a2fab262334181bbb50cba91999e24c33))

### Features

- S3 SSE by default ([#7039](https://github.com/aws-amplify/amplify-cli/issues/7039)) (ref [#5708](https://github.com/aws-amplify/amplify-cli/issues/5708)) ([c1369ed](https://github.com/aws-amplify/amplify-cli/commit/c1369ed6f9c204c89ee2d4c805314a40d6eeaf92))

# amplify-e2e-core [1.18.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-e2e-core@1.17.3...amplify-e2e-core@1.18.0) (2021-04-27)

### Bug Fixes

- consolidate REST API IAM policies ([#6904](https://github.com/aws-amplify/amplify-cli/issues/6904)) (ref [#2084](https://github.com/aws-amplify/amplify-cli/issues/2084)) ([5cfff17](https://github.com/aws-amplify/amplify-cli/commit/5cfff173d57ec9ab68984faf2d0f6474eccdcaae))

### Features

- S3 SSE by default ([#7039](https://github.com/aws-amplify/amplify-cli/issues/7039)) (ref [#5708](https://github.com/aws-amplify/amplify-cli/issues/5708)) ([c1369ed](https://github.com/aws-amplify/amplify-cli/commit/c1369ed6f9c204c89ee2d4c805314a40d6eeaf92))

# amplify-e2e-tests [2.39.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-e2e-tests@2.38.3...amplify-e2e-tests@2.39.0) (2021-04-27)

### Bug Fixes

- consolidate REST API IAM policies ([#6904](https://github.com/aws-amplify/amplify-cli/issues/6904)) (ref [#2084](https://github.com/aws-amplify/amplify-cli/issues/2084)) ([5cfff17](https://github.com/aws-amplify/amplify-cli/commit/5cfff173d57ec9ab68984faf2d0f6474eccdcaae))
- remove unused import ([#7134](https://github.com/aws-amplify/amplify-cli/issues/7134)) ([275955f](https://github.com/aws-amplify/amplify-cli/commit/275955f7e2cc808bccacb5957c89e281272f6a73))

### Features

- S3 SSE by default ([#7039](https://github.com/aws-amplify/amplify-cli/issues/7039)) (ref [#5708](https://github.com/aws-amplify/amplify-cli/issues/5708)) ([c1369ed](https://github.com/aws-amplify/amplify-cli/commit/c1369ed6f9c204c89ee2d4c805314a40d6eeaf92))

# amplify-frontend-ios [2.19.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-frontend-ios@2.19.3...amplify-frontend-ios@2.19.4) (2021-04-27)

### Bug Fixes

- **amplify-frontend-ios:** update xcode project on pull ([#7152](https://github.com/aws-amplify/amplify-cli/issues/7152)) ([9d5cb21](https://github.com/aws-amplify/amplify-cli/commit/9d5cb21b08ebc6a09c5c005e8130f4ba7db757ea))

# amplify-frontend-javascript [2.21.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-frontend-javascript@2.21.3...amplify-frontend-javascript@2.21.4) (2021-04-27)

### Bug Fixes

- frontend flag not honoring passed in framework ([#7126](https://github.com/aws-amplify/amplify-cli/issues/7126)) (ref [#7046](https://github.com/aws-amplify/amplify-cli/issues/7046)) ([1e67fc9](https://github.com/aws-amplify/amplify-cli/commit/1e67fc9a2fab262334181bbb50cba91999e24c33))

# amplify-provider-awscloudformation [4.45.0](https://github.com/aws-amplify/amplify-cli/compare/amplify-provider-awscloudformation@4.44.0...amplify-provider-awscloudformation@4.45.0) (2021-04-27)

### Bug Fixes

- consolidate REST API IAM policies ([#6904](https://github.com/aws-amplify/amplify-cli/issues/6904)) (ref [#2084](https://github.com/aws-amplify/amplify-cli/issues/2084)) ([5cfff17](https://github.com/aws-amplify/amplify-cli/commit/5cfff173d57ec9ab68984faf2d0f6474eccdcaae))
- profile validation to include source_profile and role_arn ([#7173](https://github.com/aws-amplify/amplify-cli/issues/7173)) ([70a980f](https://github.com/aws-amplify/amplify-cli/commit/70a980f757cfe6a177818bb2295ff85e06f387b1))
- return rejected promise in getStackEvents() ([#7121](https://github.com/aws-amplify/amplify-cli/issues/7121)) (ref [#7004](https://github.com/aws-amplify/amplify-cli/issues/7004)) ([f259e5a](https://github.com/aws-amplify/amplify-cli/commit/f259e5a1d087103d5a77ad59714684a7621eeaef))
- skip admin queries when consolidating REST APIs ([#7142](https://github.com/aws-amplify/amplify-cli/issues/7142)) ([c8069bd](https://github.com/aws-amplify/amplify-cli/commit/c8069bd1a69dd7bf4d31dd94743c0e4c7c140d85))

### Features

- S3 SSE by default ([#7039](https://github.com/aws-amplify/amplify-cli/issues/7039)) (ref [#5708](https://github.com/aws-amplify/amplify-cli/issues/5708)) ([c1369ed](https://github.com/aws-amplify/amplify-cli/commit/c1369ed6f9c204c89ee2d4c805314a40d6eeaf92))

# amplify-util-mock [3.30.4](https://github.com/aws-amplify/amplify-cli/compare/amplify-util-mock@3.30.3...amplify-util-mock@3.30.4) (2021-04-27)

### Bug Fixes

- mock storage trigger invocation ([#7151](https://github.com/aws-amplify/amplify-cli/issues/7151)) (ref [#7052](https://github.com/aws-amplify/amplify-cli/issues/7052)) ([ad2499b](https://github.com/aws-amplify/amplify-cli/commit/ad2499b983c87de9a71165bffb85d2ee561df70d))"
