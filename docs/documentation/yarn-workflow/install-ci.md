# Continuous Integration

Yarn can easily be used in various continuous integration systems. To speed up builds, the Yarn cache directory can be saved across builds.

## Github Actions

```yaml
steps:
  - name: Clone repository
    uses: actions/checkout@v3
    with:
      fetch-depth: 0

  - name: Setup Node.js
    uses: actions/setup-node@v3
    with:
      node-version: 'lts/*'
      cache: 'yarn'

  - name: Install Dependencies
    run: yarn install --frozen-lockfile
```
