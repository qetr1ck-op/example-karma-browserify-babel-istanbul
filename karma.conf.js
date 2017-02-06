module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'browserify'],
    files: [
      'test/*.js'
    ],
    preprocessors: {
      'test/*.js': 'browserify'
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', {presets: ['latest'], plugins: ['istanbul']}]
      ]
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'json', subdir: '.'}
      ]
    },
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
}
