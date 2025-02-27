export default function gd(source) {
  const res = {
    source: source,
    json: {
      speed: 60,
      title: "",
      pieces: [],
    },
  };
  source.split("\n").forEach((line) => {
    console.log("line", line);
    console.log(line);
    if (/#\s+.*/.test(line)) {
      res.json.title = line.replace(/#\s+/, "");
    } else if (/\*speed:\s+(\d+)/.test(line)) {
      res.json.speed = parseInt(line.replace(/\*speed:\s+(\d+)/, "$1"));
    } else if (/\|(.*)\|/.test(line)) {
      line
        .split("|")
        .filter((item) => item)
        .forEach((piece) => {
          res.json.pieces.push(piece);
        });
    }
  });
  return `export default ${JSON.stringify(res)}`;
}
