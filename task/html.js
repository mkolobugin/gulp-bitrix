const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); // Позволяет обрабатывать ошибки
const notify = require("gulp-notify"); // Позволяет выводить ошибки
const fileInclude = require("gulp-file-include"); // Позволяет подключать файлы в другие файлы - типа шапки и подвала
const htmlmin = require("gulp-htmlmin"); // Минимизирует файлы(убирвет лишние пробелы, переводы строк)
const size = require("gulp-size"); // Можем узнать размеры файлов
const webpHtml = require("gulp-webp-html");


// Обработка HTML
const html = () => {
    return src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest))
}

module.exports = html;