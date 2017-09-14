'use strict';
var gulp = require('gulp');
var fontSpider = require('gulp-font-spider');

gulp.task('font', function() {
    return gulp
        .src('test/index.html')
        .pipe(fontSpider());
});

gulp.task('default', ['font']);
