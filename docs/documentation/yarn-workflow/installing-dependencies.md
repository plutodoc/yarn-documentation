# Installing dependencies

If you have just checked out a package from [version control](./version-control), you will need to install those dependencies.

> If you are [adding dependencies](./managing-dependencies#adding-a-dependency) for your project, then those dependencies are automatically installed during that process.

## Installing Dependencies

[`yarn install`](../cli/install) is used to install all dependencies for a project. The dependencies are retrieved from your project's `package.json` file, and stored in the `yarn.lock` file.

When developing a package, installing dependencies is most commonly done after:

1. You have just checked out code for a project that needs these dependencies to function.
1. Another developer on the project has added a new dependency that you need to pick up.

## Installing Options

There are many options for installing dependencies, including:

1. Installing all dependencies: `yarn` or `yarn install`
1. Installing one and only one version of a package: `yarn install --flat`
1. Forcing a re-download of all packages: `yarn install --force`
1. Installing only production dependencies: `yarn install --production`

See [the full list](../cli/install) of flags you can pass to `yarn install`.
