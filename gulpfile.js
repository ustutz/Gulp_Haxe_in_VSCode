const gulp = require('gulp')
const browserSync = require('browser-sync');
const haxe = require('gulp-haxe')

const reload = browserSync.reload;

gulp.task('compile', function() {
  return haxe( 'build.hxml' )
    .pipe(gulp.dest('bin'));
});

gulp.task('compile-watch', ['compile'], function(done) {
    browserSync.reload();
    done();
})

gulp.task('serve', ['compile'], () => {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['bin']
        }
    });

    gulp.watch(['src/**/*.hx'], ['compile-watch']);
});

gulp.task('default', ['compile', 'watch']);