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

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./test/*.js', ['mocha']);
});

// Default Task
gulp.task('default', ['mocha', 'watch']);