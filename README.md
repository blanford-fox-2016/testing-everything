# testing-everything

### Initialize
```sh
npm install
```

### Run Test Code
```sh
mocha
```
If you're in spesific folder other than 'test' folder, run :
```sh
mocha **/**/**.test.js
```
### Watching Test Code
```sh
mocha -w
```

## package.json
```json
{
  "name": "testing-everything",
  "version": "1.0.0",
  "description": "unit test exercise",
  "main": "index.js",
  "scripts": {
    "test": "mocha chai"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/blanford-fox-2016/testing-everything.git"
  },
  "keywords": [
    "testing"
  ],
  "author": "Ahyana Rizky",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/blanford-fox-2016/testing-everything/issues"
  },
  "homepage": "https://github.com/blanford-fox-2016/testing-everything#readme",
  "dependencies": {
    "chai": "^3.5.0",
    "mocha": "^3.1.2"
  }
}
```

### Tree View
```sh
.
├── index.js
├── package.json
├── README.md
└── test
    └── test.js

1 directory, 4 files
```

### License
MIT
