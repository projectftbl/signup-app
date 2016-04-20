var gulp = require('gulp')
  , webpack = require('webpack-stream')
  , lr = require('gulp-livereload')
  , error = require('../../util/error')
  , config = require('./config')
  , configuration = require('../../config');

var build = function(file, watch) {
  config.watch = watch;
  config.output = { filename: file };

  return gulp.src(configuration.sourceDirectory + file)
  .on('error', error)
  .pipe(webpack(config))
  .pipe(gulp.dest(configuration.distDirectory))
  .pipe(lr());
};

gulp.task('webpack', function() {
  return build(configuration.distFile, false);
});

gulp.task('webpack:watch', function() {
  lr.listen();
  return build(configuration.distFile, true);
});
