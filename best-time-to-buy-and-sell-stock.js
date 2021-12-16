//My solution
const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
