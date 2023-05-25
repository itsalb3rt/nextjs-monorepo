# Monorepo using Nextjs, AntD, and Tailwind CSS

This repository is to demonstrate the use of the Nextjs, AntD, and tailwind CSS on the same repository, separate on apps and components.

**Others features**

- ✅ Husky
- ✅ Eslint
- ✅ Prettier

## Get started

Install all the dependencies
```bash
yarn
```

Run the app

```bash
yarn workspace app1 dev
```

## Install dependencies

If you want to install any dependency on any of the packages/apps, you need to use `workspace` on your `add` command;

```bash
yarn workspace components add antd
```

Or if you want to add any dependency on the root `package.json` use the following command;

```bash
yarn add antd -W
```