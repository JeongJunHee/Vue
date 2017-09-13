const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', ['babel']);

//기본 babel 태스크
gulp.task('babel', function() {
    return gulp.src('src/*.js')
    .pipe(babel({
        presets : ['es2015']
    }))
    .pipe(gulp.dest('assets/js/'))
})

//기본 watch 태스크
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel']);
})