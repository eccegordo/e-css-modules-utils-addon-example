/* jshint node: true */
'use strict';
var autoprefixer = require('autoprefixer');

module.exports = {
  name: 'e-css-modules-utils-addon-example',
  options: {
    cssModules: {
      plugins: {
        before: [
          require('lost'),
          require('postcss-nested')
        ],
        after: [
          autoprefixer('last 2 versions')
        ]
      }
    }
  }
};
