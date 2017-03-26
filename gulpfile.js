var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('prefix', function() {
  return gulp.src('app/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('app/js/*.js', uglify()))
    .pipe(gulpIf('app/css/*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/sass/*.sass', ['sass']);
  gulp.watch('app/css/*.css', ['prefix']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  // Other watchers
})

gulp.task('clean:dist', function() {
  return del.sync('dist');
})

gulp.task('default', function (callback) {
  runSequence('sass', 'prefix', ['browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    'sass', 'prefix', ['useref'],
    callback
  )
})
