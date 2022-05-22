# yarn add

Installs a package and any packages that it depends on.

## Adding dependencies

In general, a package is simply a folder with code and a `package.json` file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running `yarn add [package-name]` to install it into your project.

This will also update your `package.json` and your `yarn.lock` so that other developers working on the project will get the same dependencies as you when they run `yarn` or `yarn install`.

Most packages will be installed from the [npm registry](https://www.npmjs.com/) and referred to by simply their package name. For example, `yarn add react` will install the [`react`](https://www.npmjs.com/package/react) package from the npm registry.

You can specify versions using one of these:

1. `yarn add package-name` installs the "latest" version of the package.
2. `yarn add package-name@1.2.3` installs a specific version of a package from the registry.
3. `yarn add package-name@tag` installs a specific ["tag"](./tag) (e.g. `beta`, `next`, or `latest`).

You can also specify packages from different locations:

1. `yarn add package-name` installs the package from the [npm registry](https://www.npmjs.com/) unless you have specified another one in your `package.json`.
2. `yarn add file:/path/to/local/folder` installs a package that is on your local file system. This is useful to test out other packages of yours that haven't been published to the registry.
3. `yarn add file:/path/to/local/tarball.tgz` installs a package from a gzipped tarball which could be used to share a package before publishing it.
4. `yarn add link:/path/to/local/folder` installs a symlink to a package that is on your local file system. This is useful to develop related packages in monorepo environments.
5. `yarn add <git remote url>` installs a package from a remote git repository.
6. `yarn add <git remote url>#<branch/commit/tag>` installs a package from a remote git repository at specific git branch, git commit or git tag.
7. `yarn add https://my-project.org/package.tgz` installs a package from a remote gzipped tarball.

## Caveats

If you have used a package manager like npm previously, you may be looking for how to add global dependencies.

For the vast majority of packages it is considered a bad practice to have global dependencies because they are implicit. It is much better to add all of your dependencies locally so that they are explicit and anyone else using your project gets the same set of dependencies.

If you are trying to use a CLI tool that has a `bin` you can access these in your `./node_modules/.bin` directory. You can also use the [`global`](./global) command:

```bash
yarn global add <package...>
```

## Commands

### `yarn add <package...>`

This will install one or more packages in your [`dependencies`](../dependencies/dependency-types).

### `yarn add <package...> [--dev/-D]`

Using `--dev` or `-D` will install one or more packages in your [`devDependencies`](../dependencies/dependency-types).

### `yarn add <package...> [--peer/-P]`

Using `--peer` or `-P` will install one or more packages in your [`peerDependencies`](../dependencies/dependency-types).

### `yarn add <package...> [--optional/-O]`

Using `--optional` or `-O` will install one or more packages in your [`optionalDependencies`](../dependencies/dependency-types).

### `yarn add <package...> [--exact/-E]`

Using `--exact` or `-E` installs the packages as exact versions. The default is to use the most recent release with the same major version. For example, `yarn add foo@1.2.3` would accept version `1.9.1`, but `yarn add foo@1.2.3 --exact` would only accept version `1.2.3`.

### `yarn add <package...> [--tilde/-T]`

Using `--tilde` or `-T` installs the most recent release of the packages that have the same minor version. The default is to use the most recent release with the same major version. For example, `yarn add foo@1.2.3 --tilde` would accept `1.2.9` but not `1.3.0`.

### `yarn add <package...> [--ignore-workspace-root-check/-W]`

Using `--ignore-workspace-root-check` or `-W` allows a package to be installed
at the workspaces root. This tends not to be desired behaviour, as
dependencies are generally expected to be part of a workspace. For example
`yarn add lerna --ignore-workspace-root-check --dev` at the workspaces root
would allow lerna to be used within the scripts of the root package.json.

### `yarn add <alias-package>@npm:<package>`

This will install a package under a custom alias. Aliasing, allows multiple
versions of the same dependency to be installed, each referenced via the
_alias-package_ name given. For example, `yarn add my-foo@npm:foo`
will install the package `foo` (at the latest version) in your
[`dependencies`](../dependencies/dependency-types)
under the specified alias `my-foo`. Also, `yarn add my-foo@npm:foo@1.0.1` allows
a specific version of `foo` to be installed.

### `yarn add <package...> --audit`

Checks for known security issues with the installed packages. A count of found issues will be added to the output. Use the `yarn audit` command for additional details.
