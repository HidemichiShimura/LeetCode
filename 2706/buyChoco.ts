export default function buyChoco(prices: number[], money: number): number {
  const sortedPrices = [...prices].sort((a, b) => a - b);
  const minPriceSum = sortedPrices[0] + sortedPrices[1];

  return minPriceSum > money ? money : money - minPriceSum;
}
