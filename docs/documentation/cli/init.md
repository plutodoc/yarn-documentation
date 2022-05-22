# yarn init

Interactively creates or updates a package.json file.

### `yarn init`

This command walks you through an interactive session to create a `package.json` file. Some defaults such as the license and initial version are found in yarn's `init-*` config settings.

Here's an example of running the command inside of a directory named `testdir`:

```bash
$ yarn init
question name (testdir): my-awesome-package
question version (1.0.0):
question description: The best package you will ever find.
question entry point (index.js):
question git repository: https://github.com/yarnpkg/example-yarn-package
question author: Yarn Contributor
question license (MIT):
question private:
success Saved package.json
✨  Done in 87.70s.
```

This results in the following `package.json`:

```json
{
    "name": "my-awesome-package",
    "version": "1.0.0",
    "description": "The best package you will ever find.",
    "main": "index.js",
    "repository": {
        "url": "https://github.com/yarnpkg/example-yarn-package",
        "type": "git"
    },
    "author": "Yarn Contributor",
    "license": "MIT"
}
```

> By default, if answer given to `question private` is passed in as empty, the `private` key will not be added to `package.json`

If you already have an existing `package.json` file, then it will use the
file's entries as defaults.

The following existing `package.json`:

```json
{
    "name": "my-existing-package",
    "version": "0.1",
    "description": "I exist therefore I am.",
    "repository": {
        "url": "https://github.com/yarnpkg/example-yarn-package",
        "type": "git"
    },
    "license": "BSD-2-Clause"
}
```

Results in the following defaults during the interactive session:

```bash
$ yarn init
question name (my-existing-package):
question version (0.1):
question description (I exist therefore I am.):
question entry point (index.js):
question git repository (https://github.com/yarnpkg/example-yarn-package):
question author: Yarn Contributor
question license (BSD-2-Clause):
question private:
success Saved package.json
✨  Done in 121.53s.
```

### Setting defaults for `yarn init`

The following [config](./config) variables can be used to
customize the defaults for `yarn init`:

- `init-author-name`
- `init-author-email`
- `init-author-url`
- `init-version`
- `init-license`
  <!--- `init-private` waiting for https://github.com/yarnpkg/yarn/pull/4377 -->

### `yarn init --yes/-y`

This command skips the interactive session mentioned above and generates a `package.json` based on your defaults. Some defaults may be modified changing `init-*` config settings like mentioned above. For example, given a fresh install of Yarn and inside a `yarn-example` directory:

```bash
$ yarn init --yes
warning The yes flag has been set. This will automatically answer yes to all questions which may have security implications.
success Saved package.json
✨  Done in 0.09s.
```

Which produces the following `package.json`:

```json
{
    "name": "yarn-example",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT"
}
```

### `yarn init --private/-p`

> automatically add `private: true` to the `package.json`

```bash
yarn init --private
```

If the `private` flag is set, the `private` key will be automatically set to `true` and you still complete the rest of the init process.

```txt
question name (testdir): my-awesome-package
question version (1.0.0):
question description: The best package you will ever find.
question entry point (index.js):
question git repository: https://github.com/yarnpkg/example-yarn-package
question author: Yarn Contributor
question license (MIT):
success Saved package.json
✨  Done in 87.70s.
```

```json
{
    "name": "my-awesome-package",
    "version": "1.0.0",
    "description": "The best package you will ever find.",
    "main": "index.js",
    "repository": {
        "url": "https://github.com/yarnpkg/example-yarn-package",
        "type": "git"
    },
    "author": "Yarn Contributor",
    "license": "MIT",
    "private": true
}
```

**You can use both the `yes` and the `private` flags at the same time**

Like this:

```bash
$ yarn init -yp
warning The yes flag has been set. This will automatically answer yes to all questions which may have security implications.
success Saved package.json
✨  Done in 0.05s.
```

Which produces the following `package.json`:

```json
{
    "name": "yarn-example",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "private": true
}
```
