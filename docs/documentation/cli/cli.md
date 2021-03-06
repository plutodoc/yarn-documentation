# CLI Introduction

Yarn provides a rich set of command-line commands to help you with various aspects of your Yarn package, including installation, administration, publishing, etc.

While all of the available commands are provided here, in alphabetical order, some of the more popular commands are:

- [`yarn add`](./add): adds a package to use in your current package.
- [`yarn init`](./init): initializes the development of a package.
- [`yarn install`](./install): installs all the dependencies defined in a `package.json` file.
- [`yarn publish`](./publish): publishes a package to a package manager.
- [`yarn remove`](./remove): removes an unused package from your current package.

## Default Command

Running `yarn` with no command will run `yarn install`, passing through any provided flags.

## User-defined scripts

Running `yarn <script> [<args>]` will run a user-defined `script`. See [`yarn run`](./run).

## Locally installed CLIs

Running `yarn <command> [<args>]` will run the command, if it is matching a locally installed CLI. So you don’t need to setup user-defined scripts for simple use cases.

## Concurrency and `--mutex`

When running multiple instances of yarn as the same user on the same server,
you can ensure only one instance runs at any given time (and avoid conflicts)
by passing the global flag `--mutex` followed by `file` or `network`.

When using `file` Yarn will write/read a mutex file `.yarn-single-instance` in
the current working directory by default. You can also specify an alternate or
global filename.

```bash
--mutex file
--mutex file:/tmp/.yarn-mutex
```

When using `network` Yarn will create a server at port `31997` by default. You
can also specify an alternate port.

```bash
--mutex network
--mutex network:30330
```

## Verbose output with `--verbose`

Running `yarn <command> --verbose` will print verbose info for the execution (creating directories, copying files, HTTP requests, etc.).

## Force ANSI color output

Yarn utilizes the [chalk](https://github.com/chalk/chalk) terminal colors library and will respect an environment variable setting `FORCE_COLOR=true`, e.g. to make script tasks output color when the terminal is not a tty (e.g., in CI environments.)

## Specify working directory with `yarn --cwd <command>`

Specifies a current working directory, instead of the default `./`. Use this flag to perform an operation in a working directory that is not the current one.

This can make scripts nicer by avoiding the need to `cd` into a folder and then `cd` back out.
