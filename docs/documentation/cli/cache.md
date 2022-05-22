# yarn cache

### `yarn cache list [--pattern]`

Yarn stores every package in a global cache in your user directory on the file system. `yarn cache list` will print out every cached package.

`yarn cache list --pattern <pattern>` will print out every cached package that matches the pattern provided.

Examples:

```bash
yarn cache list --pattern gulp
yarn cache list --pattern "gulp|grunt"
yarn cache list --pattern "gulp-(match|newer)"
```

### `yarn cache dir`

Running `yarn cache dir` will print out the path where yarn's global cache is currently stored.

### `yarn cache clean [<module_name...>]`

Running this command will clear the global cache. It will be populated again the next time `yarn` or `yarn install` is run. Additionally, you can specify one or more packages that you want to clean.

## Change the cache path for yarn

Set `cache-folder` config value to configure the cache directory.

```bash
yarn config set cache-folder <path>
```

You can also specify the cache directory by flag `--cache-folder`:

```bash
yarn <command> --cache-folder <path>
```

You can also specify the cache directory by environment variable `YARN_CACHE_FOLDER`:

```bash
YARN_CACHE_FOLDER=<path> yarn <command>
```

Yarn will also respect `cache=<path>` in `.npmrc` for compatibility with npm.
