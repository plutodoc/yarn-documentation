# yarn info

Show information about a package.

### `yarn info <package> [<field>]`

This command will fetch information about a package and return it in a tree format. The package does not have to have been installed locally.

```bash
yarn info react
```

```bash
$ yarn info vx.x.x
{ name: 'react',
  version: '15.4.0-rc.2',
  description: 'React is a JavaScript library for building user interfaces.',
  time: { modified: '2016-10-06T22:09:27.397Z', ... } ... }
```

The default reporting style for this command is a single-quoted serialization.
To emit lines of valid JSON, use the standard `--json` flag:

```bash
$ yarn info react --json
{"type":"inspect","data":{"name":"react","time":{...}}}
{"type":"finished","data":417}
```

## Information for a specific version

Append `@[version]` to the package argument to provide information specific to that version:

```bash
$ yarn info react@15.3.0
yarn info vx.x.x
{ name: 'react',
  version: '15.3.0',
  description: 'React is a JavaScript library for building user interfaces.',
  time: { modified: '2016-10-06T22:09:27.397Z', ... } ... }
```

## Selecting specific fields

If the optional field argument is provided, then only that part of the tree is
returned.

```bash
$ yarn info react description
yarn info vx.x.x
React is a JavaScript library for building user interfaces.
```

Or to check versions available:

```bash
$ yarn info react versions
yarn info v1.1.0
[ '0.0.1',
  '0.0.2',
  '0.0.3',
(etc)
```

If the specified field is in turn a nested object, the child tree is returned:

```bash
$ yarn info react time
yarn info vx.x.x
{ modified: '2016-10-06T22:09:27.397Z',
  created: '2011-10-26T17:46:21.942Z', ... }

yarn info react time --json
{"type":"inspect","data":{"modified":"2016-10-06T22:09:27.397Z","created":...}}
...
```

## Retrieving the readme field

Note that by default, `yarn info` will not return the `readme` field (since it
is often very long). To explicitly request that field, use the second argument:

```bash
$ yarn info react readme
yarn info vx.x.x
## react

An npm package to get you immediate access to
[React](https://facebook.github.io/react/).
...
```
