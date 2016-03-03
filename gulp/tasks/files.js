var gulp = require('gulp')
  , watch = require('gulp-watch')
  , config = require('../config')
  , lr = require('gulp-livereload');

gulp.task('files', function () {
  return gulp.src(config.publicDirectory)
  .pipe(gulp.dest(config.distDirectory))
  .pipe(lr());
});

gulp.task('files:watch', [ 'files' ], function() {
  lr.listen();
  
  watch(config.publicDirectory, function() {
    gulp.start('files');
  });
});