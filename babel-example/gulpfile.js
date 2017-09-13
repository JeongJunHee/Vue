const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('default', ['watch']);

//기본 babel 태스크
gulp.task('babel', function() {
    return gulp.src('src/*.js')
    .pipe(babel({
        presets : ['es2015']
    }))
    .pipe(gulp.dest('assets/js/'))
})

//기본 webpack 태스크
gulp.task('webpack', ['babel'], function() {
    return gulp.src('assets/js/sum.js')
    .pipe(webpack({
        output : {
            path : '/assets/webpacked',
            filename : 'app.js'
        }
    }))
})

//기본 watch 태스크
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel', 'webpack']);
})