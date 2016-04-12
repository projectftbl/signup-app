var gulp = require('gulp')
  , watch = require('gulp-watch')
  , inject = require('gulp-inject')
  , lr = require('gulp-livereload')
  , btoa = require('btoa')
  , config = require('../config');

var environment = process.env.NODE_ENV || 'development';

var html = function(env) {
  var getAssetFile = function(filename) {
    return [ config.distDirectory, filename ].join('/');
  };

  var processConfig = function(file) {
    var config = JSON.parse(file.contents.toString('utf8'));

    // Remove secrets
    delete config.FACEBOOK.SECRET;
    delete config.TWITTER.SECRET;
    delete config.GOOGLE.SECRET;
    delete config.HTTP.AUTHENTICATE;

    return JSON.stringify(config);
  };

  return gulp.src(config.sourceDirectory + 'index.html')

  // Configuration data
  .pipe(inject(gulp.src('config/' + env + '.json'), { 
    transform: function(filepath, file) {
      return '<script type="text/javascript">window.config = "' + btoa(processConfig(file)) + '";</script>';
    }
  , name: 'config'
  }))
    
  .pipe(inject(gulp.src([ getAssetFile(config.distFile) ], { read: false }), { ignorePath: 'dist' }))
  
  .pipe(gulp.dest(config.distDirectory))
  .pipe(lr());  
};

gulp.task('html', function() {
  return html(environment);
});

gulp.task('html:watch', [ 'html' ], function() {
  lr.listen();

  watch([ config.sourceDirectory + 'index.html' ], function() {
    gulp.start('html');
  });
});