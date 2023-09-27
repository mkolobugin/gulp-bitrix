const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require("gulp-plumber"); // Позволяет обрабатывать ошибки
const notify = require("gulp-notify"); // Позволяет выводить ошибки
const babel = require("gulp-babel");
const rename = require("gulp-rename"); // Можно переименовать файл, в данном случае добавляем префикс min
const webpack = require("webpack-stream");


// Обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JavaScript",
            message: error.message 
        }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(rename({  basename: "main", suffix: ".min", extname: ".js" }))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

module.exports = js;