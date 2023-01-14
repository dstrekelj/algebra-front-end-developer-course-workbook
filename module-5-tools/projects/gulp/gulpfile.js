const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

gulp.task("styles", function () {
  return gulp
    .src("./src/style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist"));
});

gulp.task("scripts", function () {
  return gulp
    .src("./src/main.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(uglify())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch("./src/style.scss", gulp.series("styles"));
  gulp.watch("./src/main.js", gulp.series("scripts"));
});

gulp.task("default", gulp.series("scripts", "styles", "watch"));
