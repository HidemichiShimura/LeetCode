export default function maximumUnits(
  boxTypes: number[][],
  truckSize: number
): number {
  const sortedBoxTypes: number[][] = [...boxTypes].sort((a, b) => b[1] - a[1]);
  let maxTotalUnits: number = 0;
  let truckSizeRest = truckSize;

  for (let i: number = 0; i < sortedBoxTypes.length; i++) {
    const currBoxes: number = sortedBoxTypes[i][0];
    const currUnits: number = sortedBoxTypes[i][1];

    if (truckSizeRest === 0) break;
    if (currBoxes <= truckSizeRest) {
      maxTotalUnits += currBoxes * currUnits;
      truckSizeRest -= currBoxes;
    } else {
      maxTotalUnits += truckSizeRest * currUnits;
      break;
    }
  }

  return maxTotalUnits;
}
