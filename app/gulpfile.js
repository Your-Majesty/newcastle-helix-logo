const gulp = require('gulp')
const babel = require('gulp-babel')
const merge = require('merge2')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const concat = require('gulp-concat')

function err (error) {
  console.log(error.stack)
  this.emit('end')
}

gulp.task('js', () => {
  const vendor = gulp.src('source/js/vendor/**/*.js')
    .pipe(concat('vendor.js'))

  const app = gulp.src([
    'public-source/js/helix-logo/**/*.js'
  ])
    .pipe(concat('app.js'))
    .pipe(babel({
      presets: [
        ['env', {
          targets:{
            browsers: ['last 2 versions']
          }
        }]
      ]
    }))
    .on('error', err)

  return merge(vendor, app)
    .pipe(concat('helix-logo.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('css', () => {
  return gulp.src([
    'public-source/css/vendor/reset.scss',

    'public-source/css/helix-logo/fonts.scss',
    'public-source/css/helix-logo/variables.scss',
    'public-source/css/helix-logo/mixins.scss',
    'public-source/css/helix-logo/helpers.scss',
    'public-source/css/helix-logo/base.scss',

    'public-source/css/**/*.scss'
  ])
    .pipe(concat('helix-logo.css'))
    .pipe(sass())
      .on('error', err)
    //.pipe(autoprefixer())
    .pipe(gulp.dest('public/css'))
})

gulp.task('static', () => {
  return gulp.src('public-source/static/**/*')
    .pipe(gulp.dest('public'))
})

gulp.task('watch', ['default'], () => {
  gulp.watch('public-source/**/*.js', () => {
    gulp.start('js')
  })
  gulp.watch('public-source/css/**/*.scss', () => {
    gulp.start('css')
  })
  gulp.watch('public-source/static/**/*', () => {
    gulp.start('static')
  })
})

gulp.task('default', ['static', 'js', 'css'])
