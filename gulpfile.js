'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'pagination.css',
	bundleFileName: 'pagination.js',
	moduleName: 'metal-pagination',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
