const fs = require("node:fs")

writeSvg = function(shape, text){
fs.writeFile("../logo.svg",
`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
${shape}
${text}
</svg>
`, (err) => err && console.error(err))}
module.exports = writeSvg;