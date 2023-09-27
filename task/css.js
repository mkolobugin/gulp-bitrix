const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); // Позволяет обрабатывать ошибки
const notify = require("gulp-notify"); // Позволяет выводить ошибки
const concat = require("gulp-concat"); // Позволяет объединять файлы css
const cssimport = require("gulp-cssimport"); // Позволяет подключать файлы css через @import
const autoprefixer = require("gulp-autoprefixer"); // Дает кроссбраузерность?
const csso = require("gulp-csso"); // Сжимает css файлы
const rename = require("gulp-rename"); // Можно переименовать файл, в данном случае добавляем префикс min
const size = require("gulp-size");
const shorthand = require("gulp-shorthand"); //Сокращает запись стилей(не убирает пробелы, а заменяет на более короткие записи)
const groupCssMediaQueries = require("gulp-group-css-media-queries"); // Объединяет медиа запросы
const webpCss = require("gulp-webp-css"); //Заменяет пути к картинкам в разных форматах, на картинки в вебп


// Обработка CSS
const css = () => {
    return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
}

module.exports = css;