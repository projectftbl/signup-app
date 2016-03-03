var gulp = require('gulp')
  , serve = require('@ftbl/client');

gulp.task('serve', function(next) {
  serve(__dirname + '/../../dist', next);
});
