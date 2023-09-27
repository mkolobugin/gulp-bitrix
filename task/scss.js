const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat"); // Позволяет объединять файлы css
const autoprefixer = require("gulp-autoprefixer"); // Дает кроссбраузерность?
const shorthand = require("gulp-shorthand"); //Сокращает запись стилей(не убирает пробелы, а заменяет на более короткие записи)
const groupCssMediaQueries = require("gulp-group-css-media-queries"); // Объединяет медиа запросы
const rename = require("gulp-rename"); // Можно переименовать файл, в данном случае добавляем префикс min
const csso = require("gulp-csso"); // Сжимает css файлы

const plumber = require("gulp-plumber"); // Позволяет обрабатывать ошибки
const notify = require("gulp-notify"); // Позволяет выводить ошибки



// Обработка SCSS
const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "SCSS",
            message: error.message
        }))
    }))
    
    .pipe(sass())
    .pipe(concat("all.css"))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss;