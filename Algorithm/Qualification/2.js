let getResult = (data) => {
	let parse_ints = (line) => {
		return line.trim().split(' ').map(input => parseInt(input));
	}	
	
	let k = parseInt(data[0].trim());
	let plitki = new Map();
	for (let i = 2; i < k * 2 + 2; i=i+2){
		let word = data[i-1].trim()+data[i].trim();		
		if (plitki.has(word)){
			plitki.set(word, plitki.get(word)+1);
		}else{
			plitki.set(word, 1);
		}
	}

	let [n,m] = parse_ints(data[k*2+1]);
	for (let i=k*2+3;i<n+k*2+3;i=i+2){
		for (let j=1;j<m+1;j=j+2){			
			let word1 = data[i-1][j-1] + data[i-1][j] + data[i][j] + data[i][j-1];
			let word2 = data[i-1][j] + data[i][j] + data[i][j-1] + data[i-1][j-1];
			let word3 = data[i][j] + data[i][j-1] + data[i-1][j-1] + data[i-1][j];
			let word4 = data[i][j-1] + data[i-1][j-1] + data[i-1][j] + data[i][j];
						
			if (plitki.has(word1)){
				if (plitki.get(word1)>0){
					plitki.set(word1, plitki.get(word1)-1);
				}else{
					return 'No';
				}
			}else if (plitki.has(word2)){
				if (plitki.get(word2)>0){
					plitki.set(word2, plitki.get(word2)-1);
				}else{
					return 'No';
				}
			}else if (plitki.has(word3)){
				if (plitki.get(word3)>0){
					plitki.set(word3, plitki.get(word3)-1);
				}else{
					return 'No';
				}
			}else if (plitki.has(word4)){
				if (plitki.get(word4)>0){
					plitki.set(word4, plitki.get(word4)-1);
				}else{
					return 'No';
				}
			}else{
				return 'No';
			}
		}
	}
	return 'Yes';	
}

const fs = require('fs');
const { type } = require('os');
let fileContent = fs.readFileSync("input.txt", "utf8");

const data = fileContent.toString().trim().split("\n");

const result = getResult(data);

fs.writeFileSync("output.txt", result.toString());