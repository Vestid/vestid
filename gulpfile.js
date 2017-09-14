const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const babel = require('gulp-babel')
const nodemon = require('nodemon')
const scss = require('gulp-sass')
const gulp = require('gulp')

// File Paths ====================================
const basePath = './public/app'
const normalizePath = `${basePath}/styles/normalize.css`

const paths = {
    jsSrc: [`${basePath}/app.js`, `${basePath}/**/*.js`],
    scssSrc: [`${normalizePath}`, `${basePath}/components/**/*.scss`, `${basePath}/styles/*.scss`],
    server: './server/server.js'
}

// DEFINE TASKS =================================== 
gulp.task('server', () => {
    nodemon({
        'script': paths.server
    })
})

gulp.task('js-bundle', () =>  {
    gulp.src(paths.jsSrc)
	    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
	    .pipe(uglify())
	    .pipe(concat('all.js'))
	    .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./public/dist'))
})

gulp.task('scss-bundle', () => {
    gulp.src(paths.scssSrc)
	    .pipe(sourcemaps.init())
	    .pipe(autoprefixer({
		    browsers: ['last 2 versions'],
		    cascade: false
	    }))
	    .pipe(scss())
	    .pipe(cssmin())
	    .pipe(rename({suffix: '.min'}))
	    .pipe(concat('all.css'))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./public/dist'))
})

// WATCH TASK =======================================
gulp.task('watch', () => {
    gulp.watch(paths.jsSrc, ['js-bundle'])
    gulp.watch(paths.scssSrc, ['scss-bundle'])
})
gulp.task('default', ['watch', 'js-bundle','scss-bundle', 'server'])

// Task used for post-instillation on Heroku Server  ==========
gulp.task('build', ['js-bundle','scss-bundle'])          //===
// ============================================================
