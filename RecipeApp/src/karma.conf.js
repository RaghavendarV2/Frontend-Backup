module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-coverage'),
        require('karma-webpack'),
      ],
      browsers: ['Chrome'],
      singleRun: false,
      reporters: ['progress', 'coverage'],
      coverageReporter: {
        type: 'html',
        dir: 'coverage/',
      },
    });
   };