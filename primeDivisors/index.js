console.log('primeDivisors');

function isPrime(n) {
	console.log('running', n);
	if (n <= 1) {
		return false;
	} else if (n <= 3) {
		return true;
	} else if (!(n % 2) || !(n % 3)) {
		return false;
	}
	for (let i = 5; i * i <= n; i += 6) {
		if (!(n % i) || !(n % (i + 2))) {
			return false;
		}
	}
	return true;
}

const findLargestDivior = n => {
	let idx = Math.floor(Math.sqrt(n));
	while (idx > 2) {
		if (isPrime(idx)){
			if (!(n % idx)) return idx;
		}
		idx--;
	}
	return 'primeNumber';
};

console.log(findLargestDivior(600851475143));
