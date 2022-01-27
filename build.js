const fs = require('fs');

filenames = fs.readdirSync('./pics');

fs.writeFileSync('list.json', JSON.stringify(filenames))

const outHtml = '<link rel="prefetch" href="./pics/' + filenames.join('" />\n<link rel="prefetch" href="./pics/') + '" />'

fs.writeFileSync('prefetch.html', outHtml)

//<link rel="prefetch" href="http://example.com/image.png" />