export default function distanceTraveled(
  mainTank: number,
  additionalTank: number
): number {
  let resMain = mainTank;
  let resAdditional = additionalTank;
  let maxDist = 0;
  const mileagePerLiter = 10;

  while (resMain !== 0) {
    if (resMain < 5) {
      maxDist += (resMain % 5) * mileagePerLiter;
      resMain = 0;
    } else {
      maxDist += 5 * mileagePerLiter;
      resMain -= 5;

      if (resAdditional > 0) {
        resAdditional--;
        resMain += 1;
      }
    }
  }

  return maxDist;
}
