var gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: ""
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['js', 'browser-sync'], function () {
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("./*.html", ['bs-reload']);
});
