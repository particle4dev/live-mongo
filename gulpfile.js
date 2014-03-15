// Include gulp
var gulp = require('gulp'); 

// Include Plugins
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('mocha', function () {
    gulp.src('./test/*.js')
        .pipe(mocha({
            reporter: 'nyan',
            ui: 'tdd'
        })).on('error', function(err) {
            if (!/tests? failed/.test(err.stack)) {
                console.log(err.stack);
            }
        });
});

// Lint Task
gulp.task('lint', function() {
    gulp.src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['./test/*.js', './src/*.js'], ['lint', 'mocha']);
});

// Default Task
gulp.task('default', ['lint', 'mocha', 'watch']);