var gulp = require('gulp')
  , webpack = require('webpack-stream')
  , uglify = require('gulp-uglify')
  , lr = require('gulp-livereload')
  , error = require('../util/error')
  , config = require('../config');

var development = 'development'
  , env = process.env.NODE_ENV || development
  , devFlag = new webpack.webpack.DefinePlugin({ __DEV__: env === development });

var webPackConfig = {
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/
      , exclude: /node_modules/
      , loader: 'babel'
      , query: {
          cacheDirectory: true
        , presets: [ 'react', 'es2015', 'stage-0' ]
        , plugins: [ 'transform-decorators-legacy' ]
        }
      }
    , { 
        test: /\.json$/
      , loader: 'json' 
      }
    , { 
        test: /\.(png|jpg)$/
      , loader: 'url' 
      }
    ]
  , resolve: {
      extensions: [ '', '.js', '.json' ] 
    }
  }
  , devtool: '#eval-source-map'
  , debug: env === development
  , plugins: [ devFlag ]
};

var build = function(file, watch) {
  webPackConfig.watch = watch;
  webPackConfig.output = { filename: file };

  return gulp.src(config.sourceDirectory + file)
  .on('error', error)
  .pipe(webpack(webPackConfig))
  .pipe(uglify())
  .pipe(gulp.dest(config.distDirectory))
  .pipe(lr());
};

gulp.task('webpack', function() {
  return build(config.distFile, false);
});

gulp.task('webpack:watch', function() {
  lr.listen();
  return build(config.distFile, true);
});
