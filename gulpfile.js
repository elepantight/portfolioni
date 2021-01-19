const gulp = require('gulp');
const {       
    src, dest     
} = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const minifyCSS = require("gulp-csso")


function imgTest(){
    return gulp
    .src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/images'));
}
function watch(){       
    browserSync.init({     
        server: {       
            baseDir: './',     
        }   });

        gulp.watch('./sass/**/*.scss', css); 
        gulp.watch('./*.html').on('change', browserSync.reload)
    }
    function css() {     
        return src('sass/**/*.scss') // 1. Location of source files (.scss)
        .pipe(sass()) // 2. Compile the SCSS to CSS       
        .pipe(minifyCSS()) // 3. Minify the CSS       
        .pipe(dest('css')) // 4. Write the CSS file out to a specific destination 
        .pipe(browserSync.stream())
    }
exports.watch = watch
exports.imgTest = imgTest