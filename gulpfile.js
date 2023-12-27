const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const video64 = require('gulp-video64');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function styles () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function videos () {
    return gulp.src('./src/videos/**/*')
        .pipe(video64())
        .pipe(gulp.dest('./dist/videos'));
}

exports.default = gulp.parallel(styles, images, scripts, videos);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}