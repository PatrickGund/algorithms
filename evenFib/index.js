console.log('evenFib');

const fibCached = n => fibCached[n] ||
  (fibCached[n] = (n === 0 || n === 1) ? 1 :
  	fibCached(n - 1) + fibCached(n - 2))
;

// console.log(fibCached(37));

const checkFib = n => {
	let sum = 0;
	while (n > 1){
		let num = fibCached(n);
		if (!(num % 2)) {
			console.log(num);
			sum += num;
		}
		n--;
	}
	return sum;
};

console.log(checkFib(34));
