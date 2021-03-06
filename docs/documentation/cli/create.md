# yarn create

Creates new projects from any <code>create-*</code> starter kits.

### `yarn create <starter-kit-package> [<args>]`

This command is a shorthand that helps you do two things at once:

- Install `create-<starter-kit-package>` globally, or update the package to the
  latest version if it already exists
- Run the executable located in the `bin` field of the starter kit’s `package.json`,
  forwarding any `<args>` to it

For example, `yarn create react-app my-app` is equivalent to:

```bash
$ yarn global add create-react-app
$ create-react-app my-app
```

For more information, check out the [relevant blog entry](https://yarnpkg.com/blog/2017/05/12/introducing-yarn/).
