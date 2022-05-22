# yarn global

Install packages globally on your operating system.

### `yarn global <add/bin/list/remove/upgrade> [--prefix]`

`yarn global` is a prefix used for a number of commands like `add`, `bin`, `list` and `remove`. They behave identically to their normal versions except that they use a global directory to store packages. The `global` command makes executables available to use on your operating system.

_Note: Unlike the `--global` flag in npm, `global` is a command which must immediately follow `yarn`. Entering `yarn add global package-name` will add the packages named `global` and `package-name` locally instead of adding `package-name` globally._

This is useful for developer tooling that is not part of any individual project but instead is used for local commands. One such example is [nodemon](https://nodemon.io/) which can be installed globally like this:

```bash
$ yarn global add nodemon --prefix /usr/local
# the `nodemon` command is now available globally:
$ which nodemon
$ /usr/local/bin/nodemon
$ nodemon
```

## Defining install location

`yarn global bin` will output the location where Yarn will install symlinks to your installed executables. You can configure the base location with `yarn config set prefix <filepath>`. For example, `yarn config set prefix ~/.yarn` will ensure all global packages will have their executables installed to `~/.yarn/bin`.

`yarn global dir` will print the output of the global installation folder that houses the global `node_modules`. By default that will be: `~/.config/yarn/global`.

## Adding the install location to your PATH

To use the installed packages, the install location has to be added to the PATH environment variable of your shell. For bash for example, you can add this line at the end of your .bashrc:

```bash
export PATH="$(yarn global bin):$PATH"
```

Read more about the commands that can be used together with `yarn global`:

- [`yarn add`](./add): add a package to use in your current package.
- [`yarn bin`](./bin): displays the location of the yarn bin folder.
- [`yarn list`](./list): list installed packages.
- [`yarn remove`](./remove): remove a package that will no longer be used in your current package.
- [`yarn upgrade`](./upgrade): upgrade packages to their latest version based on the specified range.
- [`yarn upgrade-interactive`](./upgrade-interactive): similar to `upgrade` command, but display the outdated packages before performing any upgrade, allowing the user to select which packages to upgrade.
