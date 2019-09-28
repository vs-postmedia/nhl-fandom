const fs = require('fs');


function writeToFile(data, outfile) {
	fs.writeFile(outfile, data, err => {
		console.log(err);
	});
}

module.exports = writeToFile;