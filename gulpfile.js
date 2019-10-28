
const less = require('gulp-less');//less->css
const del = require('del');//删历史
const autoprefixer = require('gulp-autoprefixer');//浏览器兼容前缀
const minify_css = require('gulp-clean-css');//压缩css
const { series, src, dest, watch } = require('gulp');//watch:监视文件变换自动构建

function watchFile(cb)
{
    const watcher = watch("src/**/*", series('default'));
    watcher.on('change',(path)=>{
        console.info(`file ${path} was changed`)//
    })
    cb();
}

//先删除历史生成内容
function clean(cb) {
    del.sync('build');
    cb();
}
//less->css
function css(cb) {
    src("./src/style/*.less")
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist:['last 5 versions','Firefox > 20'],
            cascade: false
        }))
        .pipe(minify_css({compatibility: 'ie8'}))
        .pipe(dest('build'))
    cb();
}
exports.watchFile = watchFile;
exports.default = series(clean, css);

