const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); // Позволяет обрабатывать ошибки
const notify = require("gulp-notify"); // Позволяет выводить ошибки
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");



// Обработка FONT
const font = () => {
    return src(path.font.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "FONT",
            message: error.message
        }))
    }))
    .pipe(fonter(app.fonter))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest))
}

module.exports = font;