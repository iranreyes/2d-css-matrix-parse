var getStyle =  require('get-style-property');

function CssMatrixTransformation(){
	this._initRegexs();
}

CssMatrixTransformation.prototype = {
	_initRegexs: function(){
		var floating = '(\\-?[\\d\\.e]+)';
		var commaSpace = '\\,?\\s*';

		this.regex = {
			matrix: new RegExp(
				'^matrix\\(' +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + '\\)$')
		};
	},

	parse: function(transform){
		var matrix = this.regex.matrix.exec(transform);
		if (matrix) {
			matrix.shift();

			for (var i = matrix.length-1; i >= 0 ; i--) {
				matrix[i] = parseFloat(matrix[i]);
			};
		}

		return matrix || [ 1, 0, 0, 1, 0, 0 ];
	},

	fromElement: function(element){
		var transform = getStyle(element, 'transform');
		return this.parse(transform);
	}
}

module.exports = new CssMatrixTransformation();