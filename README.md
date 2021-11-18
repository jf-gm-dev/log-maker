# Logs Maker

### Easy way of creating log files

> Create and update files with a log structure

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save logs-maker
```

## Usage

```js
var log = require('logs-maker');

log.logMessage({
  title: "Error",
  message: "Something gone wrong!",
  directory: './logs',
  filename: 'errors.txt',
});
```

## Properties

| Property         |  Type   |                      Description                       | Default value |
|------------------|---------|--------------------------------------------------------|---------------|
|  title           | STRING  | Can be something distinctive aboute the log            |               |
|  message         | STRING  | Content of the log                                     |               |
|  directory       | STRING  | Directory where the file is located                    |    `"./"`     |
|  filename        | STRING  | Can be something distinctive aboute the log            |  `"log.txt"`  |
|  withId          | BOOLEAN | If `true` it will show a random id for the log         |    `true`     |
|  withDate        | BOOLEAN | If `true` it will show the date of creation of the log |    `true`     |
|  withSeparator   | BOOLEAN | If `true` it will show a separator for the log         |    `true`     |
|  customSeparator | STRING  | Custom separator to replace the default separator      |     `""`      |
