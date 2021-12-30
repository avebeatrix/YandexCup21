let getResult = (data) => {
	let a = BigInt('0b' + data[0].trim().replace(/one/g, 1).replace(/zero/g, 0));
	let b = BigInt('0b' + data[1].trim().replace(/one/g, 1).replace(/zero/g, 0));

	if (a < b) {
		return '<';
	} else if (a > b) {
		return '>';
	} else {
		return '=';
	}
}

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());