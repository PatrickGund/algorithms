console.log('three and five');

const threeAndFive = (num, idx = 0) => {
	let sum = 0;
	while (idx < num) {
		if (!(idx % 3) || !(idx % 5)){
			sum += idx;
		}
		idx++;
	}
	return sum;
};

console.log(threeAndFive(1000));
// console.log(threeAndFive(10));
