# Usage

Now that you have Yarn [installed](./install), you can start using Yarn. Here are some of the most common commands you'll need.

**Starting a new project**

```bash
yarn init
```

**Adding a dependency**

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**Adding a dependency to different categories of dependencies**

Add to `devDependencies`, `peerDependencies`, and `optionalDependencies` respectively:

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**Upgrading a dependency**

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**Removing a dependency**

```bash
yarn remove [package]
```

**Installing all the dependencies of project**

```bash
yarn
```

or

```bash
yarn install
```
