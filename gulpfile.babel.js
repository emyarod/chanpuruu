import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';

gulp.task('sass', () => {
  gulp.src('./**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest((f) => {
      return f.base;
    }));
});

gulp.task('minify', () => {
  gulp.src('./**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename((path) => {
      path.basename += '.min';
    }))
    .pipe(gulp.dest((f) => {
      return f.base;
    }));
});

gulp.task('default', ['sass', 'minify'], () => {
  gulp.watch('./**/*.scss', ['sass', 'minify']);
});