var gulp = require('gulp'),
  babel = require('babelify'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts.bundle', function () {
  return browserify("./source/index.js")
    .transform(babel)
    .bundle()
    .pipe(source('keensole.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['scripts.bundle']);