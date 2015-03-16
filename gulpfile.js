var gulp = require('gulp'),
  taskListing = require('gulp-task-listing'),
  $ = require('gulp-load-plugins')(),
  minify = require('gulp-minify-css');

var publicPath = 'web';
var tempPath   = 'tmp';
var config = {
  url: "",
  lessPath: tempPath + '/less',
  cssPath: publicPath + '/css',
  jsPath: publicPath + '/js',
  iconPath: publicPath + '/fonts',
  bowerDir: 'external'
};

gulp.task('help', taskListing);
gulp.task('default', ['install']);
gulp.task('deploy', ['dist']);
gulp.task('compile', ['compile-less', 'compile-js']);

/**********************************************/
/************* Dist build *********************/
gulp.task('dist', ['dist-bower', 'dist-install']);
gulp.task('dist-bower', function () {
  $.bower()
    .pipe(gulp.dest(config.bowerDir));
});

gulp.task('dist-install', ['dist-bower'], function () {
  // Font awesome
  gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
    .pipe(gulp.dest(config.iconPath));

  // External libraries (will be compiled)
  gulp.src([
      config.bowerDir + '/jquery/dist/*min.*',
      config.bowerDir + '/bootstrap/dist/js/**min.*'
    ])
    .pipe(gulp.dest(tempPath + '/js'));

  gulp.src([
    config.bowerDir + '/angular/angular.min.js',
    config.bowerDir + '/angular/angular.min.js.map',
    config.bowerDir + '/angular-material/angular-material.min.js'
    ])
    .pipe(gulp.dest(config.jsPath));

  // External styles
  gulp.src([
    config.bowerDir + '/bootstrap/dist/css/bootstrap.min.css',
    config.bowerDir + '/angular-material/angular-material.min.css',
    config.bowerDir + '/angular-material/default-theme.css'
    ])
    .pipe(gulp.dest(tempPath + '/css'));
});
/**********************************************/
/**********************************************/

/**********************************************/
/************* Validation *********************/
gulp.task('test-validation', ['test-validation-html']);
gulp.task('test-validation-html', function () {
  gulp.src(publicPath + '/*.html')
    .pipe($.plumber())
    .pipe($.w3cjs());
});
/**********************************************/
/**********************************************/

/**********************************************/
/************* Compilation ********************/
gulp.task('compile-js', function () {
  gulp.src([
      tempPath + '/js/jquery*.js'
    ])
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.order([
      tempPath + '/js/**.js',
      !tempPath + '/js/jquery*.js'
    ]))
    .pipe($.concat('app.min.js'))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.jsPath));
});
gulp.task('compile-less', function () {
  gulp.src([config.lessPath + '/*.less'])
    .pipe($.plumber())
    .pipe($.concat('style.min.less'))
    .pipe($.less())
    .pipe(minify({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.cssPath));
});
gulp.task('compile-css', function () {
  gulp.src([tempPath + '/css/*.css'])
    .pipe($.plumber())
    .pipe($.concat('style.min.css'))
    .pipe(minify({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(config.cssPath));
});
/**********************************************/
/**********************************************/

gulp.task('watch', function () {
  gulp.watch(config.lessPath + '/*.less', ['compile-less']);
  gulp.watch(tempPath + '/*.js', ['compile-js']);
  gulp.watch(publicPath + '/*.html', ['test-validation-html']);
});
