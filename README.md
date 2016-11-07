# testing-everything
Here is a simple Test Driven Development (TDD) implementation. I'm using mocha and chai as the test runner and framework.

I just make a single function `add()` that needs two parameters and will return the sum of both parameters.

The lib file is `mathamvan.js`, and the test file can be found inside `test` directory, the filename is `mathamvan.test.js`.

### File Structure
```
.
├── README.md
├── mathamvan.js
├── package.json
└── test
    └── mathamvan.test.js
```
### Dependencies
```
{
  "name": "testing-everything",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/blanford-fox-2016/testing-everything.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/blanford-fox-2016/testing-everything/issues"
  },
  "homepage": "https://github.com/blanford-fox-2016/testing-everything#readme",
  "dependencies": {
    "chai": "^3.5.0"
  },
  "devDependencies": {
    "mocha": "^3.1.2"
  }
}

```

### Running the test

It's better for you to have mocha installed globally. To install mocha globally, you can do it by just enter the command `npm i -g mocha`.

Then, install all the dependencies, simply just by executing commang `npm i`.

After you've installed mocha and all the dependencies, run the test by executing `mocha`.

If you're a cat lover, try executing `mocha -R nyan`. You'll love it!

```
❯❯❯❯ mocha -R nyan                               ~/D/j/testing-everything tama
 4   -_-_-_,------,
 0   -_-_-_|   /\_/\
 0   -_-_-^|__( ^ .^)
     -_-_-  ""  ""

  4 passing (17ms)
```
