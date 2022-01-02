# npm 7+ workspaces monorepo example

A simple monorepo template using es modules and npm workspaces

## Structure
```bash
|-example/ # Directory containing example project
|-docs/ # Auto generated docs from typedoc
|-packages/ # Library specific sub packages
```

## Dependencies
 * [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces/)
 * [eslint](https://eslint.org/)
 * [mocha](https://mochajs.org/)/[chai](https://www.chaijs.com/)
 * [husky](https://typicode.github.io/husky/#/)
 * [vite](https://vitejs.dev/) for building / dev server for the example
 * [typedoc](https://typedoc.org/) for docs. See [example](https://bmpickford.github.io/npm-workspaces-example/modules.html) output

## How to

#### Add another package
Add another folder under the packages directory and run `npm init`. Add the following options to the newly created `package.json`; `"type", "module", "main", "exports"`. It is also recommeded that the other fields present in the existing packages are also added, but are optional.

#### Use a framework like react for one of the workspaces
Add the dependencies to the sub package, then run `npm install` in the root directory.

#### Publish
Ensure non publishable packages and libraries are marked with `"private": true`. This will ensure they are not published
`npm publish --ws`

#### Use Typescript
Create your tsconfig and source files, then update the `package.json` `"main"` and `"types"` fields, and optionally add `"files"` if the compiled js is outputted in another directory.