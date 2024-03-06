function findRestaurant(list1: string[], list2: string[]): string[] {
  const cmnStrs = list1.filter((str) => list2.includes(str));
  const idxSums = cmnStrs.map((str) => list1.indexOf(str) + list2.indexOf(str));
  const minIdxSum = Math.min(...idxSums);
  const cmnStrsWithMinIdxSum: string[] = [];

  for (let i = 0; i < idxSums.length; i++) {
    if (idxSums[i] === minIdxSum) {
      cmnStrsWithMinIdxSum.push(cmnStrs[i]);
    }
  }

  return cmnStrsWithMinIdxSum;
}
