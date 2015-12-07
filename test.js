var matrixTransform = require('./index.js');
var test 			= require('tape');

test('parse function', function (t) {
	t.equal(typeof matrixTransform.parse, 'function', 'parse is a function');

	var matrix = "matrix(1.1, 0, 0, 1.1, 0, 0)";
	t.equal(matrixTransform.parse(matrix).length, 6, 'given matrix(1.1, 0, 0, 1.1, 0, 0) returns array of 6 values');
	t.equal(arraysEqual(matrixTransform.parse(matrix), [1.1,0,0,1.1,0,0]), true, 'given matrix(1.1, 0, 0, 1.1, 0, 0) the returned matrix is the expected');
	t.end();
});

test('fromElement function', function (t) {
	t.equal(typeof matrixTransform.fromElement, 'function', 'fromElement is a function');

	var element = document.createElement('div');
	element.style.transform = "scale(1.5)";
	document.body.appendChild(element);

	t.equal(arraysEqual(matrixTransform.fromElement(element), [1.5,0,0,1.5,0,0]), true, 'given a div element with scale(1.5) returns the array [1.5,0,0,1.5,0,0]');
	t.end();
});

function arraysEqual(a, b) {
	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
  	if (a[i] !== b[i]) return false;
  }
  return true;
}
