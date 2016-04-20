var gulp = require('gulp')
  , path = require('path')
  , server = require('@ftbl/client');

gulp.task('serve', function(next) {
  var app = server(path.join(__dirname, '..', '..', 'dist'))
    , port = process.env.PORT || 4200;

  app.listen(port, function() {
    console.log('%d listening on port %d', process.pid, port);
    next();
  });
});
