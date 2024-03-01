export default function isPossibleToSplit(nums: number[]): boolean {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let idx = 0;

  while (idx < sortedNums.length - 2) {
    if (sortedNums[idx] === sortedNums[idx + 2]) {
      return false;
    }
    idx++;
  }
  return true;
}
