const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");

gulp.task('js', function () {
    return gulp.src('./main.js')
        .pipe(babel({ presets: ["@babel/preset-env"] }))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('./style.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch(['main.js', 'src/**/*.js'], gulp.series('js'));
    gulp.watch('style.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('js', 'sass', 'watch'));
