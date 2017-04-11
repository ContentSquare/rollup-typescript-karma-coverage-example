module.exports = function (config) {
  'use strict';

  config.set({
    frameworks: ['jasmine'],
    files: ['testOutput/bundledSpecs/*.spec.js'],
    preprocessors: {
      'testOutput/bundledSpecs/*.spec.js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type: 'json',
      dir: 'testOutput/coverage',
      subdir: '.'
    },
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
