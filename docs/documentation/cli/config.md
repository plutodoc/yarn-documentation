# yarn config

Manages the yarn configuration files.

### `yarn config set <key> <value> [-g|--global]`

Sets the config `key` to a certain `value`.

Example:

```bash
$ yarn config set init-license BSD-2-Clause
yarn config vx.x.x
success Set "init-license" to "BSD-2-Clause".
✨  Done in 0.05s.
```

### `yarn config get <key>`

Echoes the value for a given `key` to `stdout`.

Example:

```bash
$ yarn config get init-license
BSD-2-Clause
```

### `yarn config delete <key>`

Deletes a given `key` from the config.

Example:

```bash
$ yarn config delete test-key
yarn config vx.x.x
success Deleted "test-key".
✨  Done in 0.06s.
```

### `yarn config list`

Displays the current configuration.

Example:

```bash
$ yarn config list
yarn config vx.x.x
info yarn config
{ 'version-tag-prefix': 'v',
  'version-git-tag': true,
  'version-git-sign': false,
  'version-git-message': 'v%s',
  'init-version': '1.0.0',
  'init-license': 'MIT',
  'save-prefix': '^',
  'ignore-scripts': false,
  'ignore-optional': true,
  registry: 'https://registry.yarnpkg.com',
  'user-agent': 'yarn/0.15.0 npm/? node/v6.2.1 darwin x64' }
info npm config
{ registry: 'https://registry.npmjs.org/',
  '//localhost:4873/:_authToken': 'some-auth-token' }
✨  Done in 0.05s.
```
