const path = require('node:path');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    plugins: [require('karma-jasmine'), require('karma-chrome-launcher'), require('karma-coverage')],
    reporters: ['dots'],
    coverageReporter: {
      dir: path.join(__dirname, '..', 'coverage', 'app'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
  });
};
