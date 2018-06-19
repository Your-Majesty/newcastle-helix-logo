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
  const vendor = gulp.src([
    'public-source/js/vendor/three.min.js',
    'public-source/js/vendor/**/*.js'
  ])
    .pipe(concat('vendor.js'))

  const app = gulp.src([
    'public-source/js/helix-logo/shaders/**/*.js',
    'public-source/js/helix-logo/services/**/*.js',
    'public-source/js/helix-logo/components/**/*.js',
    'public-source/js/helix-logo/ui/**/*.js',
    'public-source/js/helix-logo/HelixLogoApp.js'
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

gulp.task('generate-service-worker', function(callback) {
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,mp4,json}'],
    stripPrefix: rootDir,
    maximumFileSizeToCacheInBytes: 1024 * 1024 * 25,

    runtimeCaching: [{
      urlPattern: /\/api\/data/,
      handler: 'networkFirst'
    }, 
    {
      urlPattern: /\/latest\/*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /\/app/,
      handler: 'networkFirst'
    }
    ]
  }, callback);
});

gulp.task('default', ['static', 'js', 'css'])
