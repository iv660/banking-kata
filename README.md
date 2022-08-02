# Banking Kata

## Your Task
Your bank is tired of its mainframe COBOL accounting software and they hired both of you for a greenfield project in - what a happy coincidence

your favorite programming language!
Your task is to show them that your TDD-fu and your new-age programming language can cope with good ole’ COBOL!

## Requirements
Write a class Account that offers the following methods 
- `void deposit(int)` 
- `void withdraw(int)` 
- `String printStatement()`

An example statement would be:

    Date        Amount  Balance
    24.12.2015   +500      500
    23.8.2016    -100      400

## Installing dependencies

```bash
# Get Yarn
npm install -g yarn

# Install dependencies
yarn install
```

## Running tests

```bash
# Run tests once
yarn test

# Run tests with Jest-CLI custom arguments (https://jestjs.io/docs/en/cli.html)
yarn test --clearCache --debug

# Run tests for a specific file
yarn test MyFile.test.ts
```

A few other NPM scripts are provided for convenience, they all support custom arguments as described above.

```
# Run tests once with coverage
# Coverage report available in ./coverage/index.html
yarn test:cover

# Run all tests in watch mode without coverage
yarn test:watch

# Run the tests with watch mode only for files changed since the last Git commit
yarn test:changed

# Run tests for CI environment (optimized for TravisCI)
yarn test:ci
```