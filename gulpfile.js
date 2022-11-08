var gulp         = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var nano         = require("gulp-cssnano");
var sync         = require("browser-sync");
var uglify       = require("gulp-uglify");

const sass = require('gulp-sass')(require('sass'))

var paths = {
  html: {
    src: "./src/**/*.html",
    dist: ".",
  },
  scripts: {
    src: "./src/js/**/*.js",
    dist: "./js"
  },
  serve: {
    src: "."
  },
  styles: {
    src: "./src/sass/**/*.scss",
    dist: "./css",
  }
};

gulp.task("default",
  gulp.series(
    html, scripts, styles,
    gulp.parallel(serve, watch)
  )
);

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dist))
    .pipe(sync.stream());
}

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(sync.stream());
}

function serve() {
  sync.init({
    server: paths.serve.src
  });
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(nano())
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(sync.stream());
}

function watch() {
  gulp.watch(paths.html.src).on("change", html);
  gulp.watch(paths.scripts.src).on("change", scripts);
  gulp.watch(paths.styles.src).on("change", styles);
}
