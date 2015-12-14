# 2d-css-matrix-parse

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Converts css transform matrix to an 2D array of 6 values(3x3 matrix).

### Function parse

The `parse` function takes a matrix string representation like `matrix(1.1, 0, 0, 1.1, 0, 0)` and parse it to an array of floats.

```js
var matrixTransform = require('./index.js');

var matrix = "matrix(1.1, 0, 0, 1.1, 0, 0)";

matrixTransform.parse(matrix);
// -> [1.1, 0, 0, 1.1, 0, 0]
```

### Function fromElement

The `fromElement` function tries to help you to get the transform string matrix representation and let you pass instead of the string the HTML element itself.

```js
var matrixTransform = require('./index.js');

var element = document.createElement('div');
element.style.transform = "scale(1.5)";
document.body.appendChild(element);

matrixTransform.fromElement(element);
// -> [1.5,0,0,1.5,0,0]
```

**Important Note:**

Doesn't matter if the transform is not formatted as a matrix, in the above example we are setting to `element` the value `scale` instead of the current matrix.

## Usage

[![NPM](https://nodei.co/npm/2d-css-matrix-parse.png)](https://www.npmjs.com/package/2d-css-matrix-parse)

#### `matrixTransform.parse(string)`

It takes a string matrix representation and gives you an array.

#### `matrixTransform.fromElement(HtmlElement)`

It takes an Html Element and gives you an array with the element transformation.

## License

MIT, see [LICENSE.md](http://github.com/iranreyes/2d-css-matrix-parse/blob/master/LICENSE.md) for details.