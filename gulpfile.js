var gulp = require('gulp');
var npmVersion = require('./');

gulp.task('default', function() {
  return gulp.src('package.json')
		.pipe(npmVersion());
});