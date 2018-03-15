const maxProfit = (prices) => {
  let diff = 0, lowestPrice = prices[0];
  prices.forEach(price => {
    if (price < lowestPrice) lowestPrice = price;
    diff = Math.max(diff, price - lowestPrice);
  });
  return diff;
};

console.log(maxProfit([18, 17, 881, 1082, 20, 1231, 23, 0]));
console.log(maxProfit([2, 9, 11, 1, 8]));
