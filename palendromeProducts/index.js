console.log('palendromeProducts');

const palendromeProducts = () => {
	let result;
	let a = 999;
    let b = 999;
    let count = 1;
	while ( a > 99 && b > 99 ){
		result = '' + (a * b);
		let front = result.split('').slice(0, 3);
		let back = result.split('').slice(3).reverse();
        		console.log(front, back);
		if (front == back) {
			console.log('palendrome', a, b);
		}
		a--;
		front = result.split('').slice(0, 3);
		back = result.split('').slice(3).reverse();
		result = '' + (a * b);
        		console.log(front, back);
		if (front == back) {
			console.log('palendrome', a, b);
		}
		b--;
		front = result.split('').slice(0, 3);
		back = result.split('').slice(3).reverse();
        		if (front == back) {
			console.log('palendrome', a, b);
		}
		console.log(front, back);
	}
};

console.log(palendromeProducts());
