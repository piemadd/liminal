const fs = require('fs');

filenames = fs.readdirSync('./pics');

fs.writeFileSync('list.json', JSON.stringify(filenames))