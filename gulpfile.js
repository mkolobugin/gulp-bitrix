const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require("./config/app.js");

// Задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const vendorJS = require('./task/vendor-js.js');
const vendorCSS = require('./task/vendor-css.js');
const img = require('./task/img.js');
const font = require('./task/font.js');



// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Наблюдение
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.vendorCSS.watch, vendorJS).on("all", browserSync.reload);
    watch(path.vendorJS.watch, vendorCSS).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

const build = series(
    clear,
    parallel(html, scss, js, vendorJS, vendorCSS, img, font)
);

const dev = series(
    build,
    parallel(watcher, server)
);

// Задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.vendorJS = vendorJS;
exports.vendorCSS = vendorCSS;
exports.img = img;
exports.font = font;

// Сборка
exports.default = app.isProd
    ? build 
    : dev;