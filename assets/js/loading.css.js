/*！
 * loading.scss 预处理对应的每个类中子类的元素的个数
 * 使用时需要先引入jq和生成后的loading.css样式表
 * 此js旨在不搞成子元素的个数，如不使用此js,则参照exp-loading.html中的案例
 */
(function ($) {
	var divs = {
		'ball-pulse': 3,
		'ball-pulse-sync': 3,
		'ball-pulse-round': 3,
		'circle-dot': 12,
		'ball-pulse-rise': 5,
		'ball-grid-beat': 9,
		'ball-grid-pulse': 9,
		'ball-clip-rotate-pulse': 2,
		'ball-clip-rotate-multiple': 2,
		'ball-clip-rotate': 1,
		'ball-beat': 3,
		'ball-rotate': 1,
		'ball-scale-multiple': 3,
		'ball-scale-ripple-multiple': 3,
		'ball-scale-ripple': 1,
		'ball-scale-random': 3,
		'ball-scale': 1,
		'ball-spin-fade-loader': 8,
		'ball-spin-loader': 8,
		'ball-triangle-path': 3,
		'ball-zig-zag-deflect': 2,
		'ball-zig-zag': 2,
		'cube-transition': 2,
		'line-scale-pulse-out-rapid': 5,
		'line-scale-pulse-out': 5,
		'line-scale-party': 4,
		'line-scale': 5,
		'line-spin-fade-loader': 8,
		'pac-man': 5,
		'semi-circle-spin': 1,
		'square-spin': 1,
		'triangle-skew-spin': 1,
		'point-chase': 6,
		'ball-bounce': 2,
		'ball-swing': 2,
		'circle-fade': 12,
		'grid-cube': 9,
		'fold-cube': 4,
		'wander-cube': 3,
	};

	var addDivs = function (n) {
		var arr = [];
		for (i = 1; i <= n; i++) {
			arr.push('<div></div>');
		}
		return arr;
	};

	$.fn.loaders = function () {
		return this.each(function () {
			var elem = $(this);
			$.each(divs, function (key, value) {
				if (elem.hasClass(key)) elem.html(addDivs(value));
			});
		});
	};

	$(function () {
		$.each(divs, function (key, value) {
			$('.loader-inner.' + key).html(addDivs(value));
		});
	});
}.call(window, window.$ || window.jQuery || window.Zepto));
