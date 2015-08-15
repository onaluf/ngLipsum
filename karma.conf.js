'use strict';

var path = require('path');
var conf = {
    paths: {
        src: 'src',
        spec: 'spec',
        bower: 'bower_components'
    }
};

module.exports = function(config) {

  var configuration = {
    files: [
        path.join(conf.paths.bower, '/angular/angular.js'),
        path.join(conf.paths.bower, '/angular-mocks/angular-mocks.js'),
        path.join(conf.paths.src, '/module.js'),
        path.join(conf.paths.src, '/service.js'),
        path.join(conf.paths.src, '/directive.js'),
        path.join(conf.paths.spec, '/*.js')
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-jasmine'
    ],
  };

  config.set(configuration);
};
