This is a test project to investigate issues in [this pull request](https://github.com/zeit/styled-jsx/pull/375) to [styled-jsx](https://github.com/zeit/styled-jsx).

In the `my-plugin` is a babel plugin that simply logs `state.file.filename` and `state.file.opts` to the console.

### Instructions
Install dependencies
```
yarn
```

Compile the source via babel-cli
```
yarn cli
```

Compile the source via webpack
```
yarn bundle
```

### Observations
`state.file.filename` doesn't seem to be defined when compiling via babel-cli as originally thought, it's not defined when compiling via webpack either.

`state.file.opts.filename` is probably what we're after.
