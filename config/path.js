const pathSrc = "./src";
const pathDest = "./../local/assets";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },
    scss: {
        src: pathSrc + "/sass/*.scss",
        watch: pathSrc + "/sass/**/*.scss",
        dest: pathDest + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    vendorCSS: {
        src: pathSrc + "/vendor/css/*.css",
        watch: pathSrc + "/vendor/css/**/*.css",
        dest: pathDest + "/vendor/css"
    },
    vendorJS: {
        src: pathSrc + "/vendor/js/*.js",
        watch: pathSrc + "/vendor/js/**/*.js",
        dest: pathDest + "/vendor/js"
    },
    img: {
        src: pathSrc + "/img/*.{png,jpg}",
        watch: pathSrc + "/img/**/*.{png,jpg}",
        dest: pathDest + "/img"
    },

    font: {
        src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"
    }

}