var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
    return gulp.src('web/assets/js/main.js')
  .pipe(webpack({
      output: { filename: 'bundled.js' },
      module: {
          loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
          ]
      }
   }))
   .pipe(gulp.dest('web/'));
});
