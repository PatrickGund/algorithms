
const maxProductMemo = (arr, idx = 0, memo = {}, result = 1) => {
	if (idx === arr.length) return result;
	if (!memo[idx]) memo[idx] = {};
	else if (memo[idx].hasOwnProperty(result)) return memo[idx][result];
	let num = arr[idx];
	let whenIncluded = maxProductMemo(arr, idx + 1, memo, (result * num));
	let whenExcluded = maxProductMemo(arr, idx + 1, memo, result);
	memo[idx][result] = Math.max(whenIncluded, whenExcluded);
	return memo[idx][result];
};


const simpleMax = arr => {
	let neg = arr.filter(num => (num < 0));
	let pos = arr.filter(num => (num > 0));
	let div;
	let negProd = neg.reduce((a1, b1) => (a1 * b1));
	let posProd = pos.reduce((a1, b1) => (a1 * b1));
	if (neg.length) {
		if (!neg.length % 2){
			div = Math.min(...neg);
			negProd = (negProd / (-div));
		}
	}
	return negProd * posProd;
};
