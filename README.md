# noist (Short for No Hoist)
Repo for tricking NPM into not hoisting your package. No dependencies and a warning if imported.

## Why?
As of `npm@7` NPM supports [NPM Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) which allows you to have multiple npm packages in a single folder structure.

NPM workspaces has a feature that deduplicates packages that are found multiple times in the folder structure.

For example, say there are two packages, `package-a` and `package-b` that both depend on `jest@24` 

NPM 7+ will recognize this dependency is identical and "hoist" that package to the root of your mono repo, resulting in a tree like this:
```
node_modules/
  jest@24
packages/
  package-a
  package-b
```
The node resolution algorithm will search up the tree and find it successfully.

There are quite a few pitfalls related to hoisting, notably if the package has `peerDependencies` or requires a single-copy in the tree this can cause issues where sibling dependencies end up importing the wrong package.

Thankfully, until this is fixed in `npm` itself @ruyadorno from the `npm` team proposed a workaround
https://github.com/prisma/prisma/issues/9649

This package is created to facilitate that workaround with the following requirements:
- There are **NO** dependencies of this node package
- The package instantly throws an error warning you and linking to this document if you accidentally import it

## How?

If you want to use this, first of all, try not to have to by syncing up your dependency tree and aligning to similar versions.

If you _do_ need to use this you can install it at the **root** of your NPM workspaces repo with:
```bash
npm i package-to-not-hoist@npm:noist@1
```

Confirm you have it downloaded by:
```bash
cat node_modules/package-to-not-hoist/package.json
```

Make sure you replace `package-to-not-hoist` with the actual `npm` package you want to replace.

## Contributing
If you want to contribute docs or examples to this repo feel free, my hope is that this is a stop gap measure and won't be needed once `npm` supports a `nohoist` flag or some feature that is similar.