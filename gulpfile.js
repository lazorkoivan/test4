var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();;


gulp.task('watch', function(){
  browserSync.init({
    server: "./app"
});
  gulp.watch('app/sass/*.scss', gulp.series('sass')); 
  // gulp.watch('app/*.html', browserSync.reload()); 
  gulp.watch("app/*.html").on('change', browserSync.reload);
})

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
});

gulp.task('default', gulp.series('watch'));