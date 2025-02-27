export default function cyjCss(source) {
  // return "export {}";
  const options = this.getOptions();
  console.log("上个 loader 来的是什么", source);
  return source;
  source = source.replace(/\[name\]/g, options.name);

  return `${JSON.stringify(source)}`;
}
