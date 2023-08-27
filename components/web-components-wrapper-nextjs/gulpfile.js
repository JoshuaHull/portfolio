const { src, dest, series } = require("gulp");
const zip = require("gulp-zip");
const { rimraf } = require("rimraf");

async function clean() {
  rimraf("./dist");
}

async function build() {
  return (
    src(`./src/**/*`)
      .pipe(zip("web-components-wrapper-nextjs.zip"))
      .pipe(dest(`./dist`))
  );
}

exports.default = series(clean, build);
