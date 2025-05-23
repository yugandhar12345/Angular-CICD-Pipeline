// // karma.conf.js
// module.exports = function (config) {
//   config.set({
//     basePath: '',
//     frameworks: ['jasmine', '@angular-devkit/build-angular'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-jasmine-html-reporter'),
//       require('karma-coverage'),
//       require('@angular-devkit/build-angular/plugins/karma')
//     ],
//     client: {
//       jasmine: {},
//       clearContext: false // Leave Jasmine Spec Runner output visible in browser
//     },
//     coverageReporter: {
//       dir: require('path').join(__dirname, './coverage'),
//       subdir: '.',
//       reporters: [
//         { type: 'html' }, // Generates HTML report
//         { type: 'text-summary' }, // Outputs a summary to the console
//         { type: 'lcovonly', file: 'lcov-report/lcov.info' }, // LCOV for SonarQube
//         { type: 'cobertura', file: 'cobertura.xml' } // Cobertura XML for SonarQube
//       ]
//     },
//     reporters: ['progress', 'kjhtml', 'coverage'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: false,
//     browsers: ['ChromeHeadless'],
//     singleRun: true,
//     restartOnFileChange: true
//   });
// };


// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {},
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'lcovonly', file: 'lcov.info' } // Generates only LCOV report
      ]
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};
