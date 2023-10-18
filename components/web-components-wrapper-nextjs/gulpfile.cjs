const { wrapperGenerator } = require("./src/wrapperGenerator.cjs");
const { src, dest, series } = require("gulp");
const zip = require("gulp-zip");
const { rimraf } = require("rimraf");
const { writeFile, mkdir } = require("fs/promises");

async function prepare() {
  await rimraf("./dist");
  await mkdir("./dist");
}

async function generate() {
  const generator = wrapperGenerator(
    ["FoldablePanel", "fsj-foldable-panel"],
    ["FoldableTextArea", "fsj-foldable-textarea"],
    ["CodeBlockForTypescript", "fsj-code-block-for-typescript"],
  );

  for (const [fileName, content] of generator)
    await writeFile(`./dist/${fileName}`, content);
}

async function build() {
  return (
    src(`./dist/**/*`)
      .pipe(zip("web-components-wrapper-nextjs.zip"))
      .pipe(dest(`./dist`))
  );
}

exports.default = series(prepare, generate, build);
