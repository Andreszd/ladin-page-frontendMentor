const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const plunger = require('gulp-plumber')

const { init, stream, reload } = require('browser-sync')


/* definition tasks */
gulp.task('babel', ()=>{
    return gulp.src('./src/js/*.js') 
            .pipe(plunger())
            .pipe(concat('scripts-min.js'))
            .pipe(babel())
            .pipe(gulp.dest('./public/js'))
})
gulp.task('scss', ()=>{
    return gulp.src('./src/scss/style.scss')
            .pipe(plunger())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(gulp.dest('./public/css'))
            .pipe(stream())
})
gulp.task('pug', ()=>{
    return gulp.src('./src/views/index.pug')
            .pipe(plunger())
            .pipe(pug())
            .pipe(gulp.dest('./public'))
})

/* principal task */
gulp.task('default', ()=>{
    init({
        server: './public'
    })
    gulp.watch('./src/views/**/*.pug', gulp.series('pug')).on('change', reload)
    gulp.watch('./src/scss/**/*.scss', gulp.series('scss'))
    gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', reload)
})

