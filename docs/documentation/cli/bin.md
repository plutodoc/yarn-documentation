# yarn bin

Displays the location of the yarn `bin` folder.

### `yarn bin [<executable>]`

- `yarn bin` will print the folder where yarn will install executable files for your package. An example of an executable may be a script that you have defined for your package that can be executed via [`yarn run`](./run).

Example:

```bash
$ yarn bin
/home/emillumine/Code/Funkwhale/funkwhale/front/node_modules/.bin
```

- `yarn bin <executable>` will print the path to the executable file.

Example:

```bash
$ yarn bin gettext-compile
/home/emillumine/Code/Funkwhale/funkwhale/front/node_modules/.bin/gettext-compile
```
