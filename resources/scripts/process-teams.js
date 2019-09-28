const writeToFile = require('./writeToFile');
const data = require('../data/shapefiles_with_data/merged-outout-final_small.json');
const processedData = require('../data/shapefiles_with_data/merged-outout-final-processed.json');


processGeoJSON()

// filter subsets of data
// 1. washington & vegas
function filterData() {

	const vegas = processedData.features.filter(d => {
		return d.properties.Team === 'Vegas Golden Knights';
	});

	const dc = processedData.features.filter(d => {
		return d.properties.Team === 'Washington Capitals';
	});
	console.log(vegas[0], dc[0])

	writeToFile(JSON.stringify(vegas), './vegas-only.json');
	writeToFile(JSON.stringify(dc), './dc-only.json');
}


// add FSA code to Canadian locations
function processGeoJSON() {
	data.features.forEach(d => {
		if (d.properties.CFSAUID) {
			// trim french from province & append the FSA code to location
			d.properties.location = `${d.properties.location.split(' / ')[0]}, ${d.properties.CFSAUID}`;
			
		}
		// remove null
		if (d.properties.team === null) {
			d.properties.team = '';
		}

	});
	writeToFile(JSON.stringify(data), '../data/shapefiles_with_data/merged-outout-final-processed.json');

}