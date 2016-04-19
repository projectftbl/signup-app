var gulp = require('gulp')
  , requireDir = require('require-dir')
  , sequence = require('run-sequence');

require('@ftbl/gulp')(gulp, { test: { coverage: 0 }});

requireDir('./gulp/tasks', { recurse: true });

gulp.task('watch', [ 'webpack:watch', 'files:watch', 'html:watch' ]);
gulp.task('default', [ 'serve', 'watch' ]);

gulp.task('dist', function() {
  sequence('webpack', 'files', 'html');
});
