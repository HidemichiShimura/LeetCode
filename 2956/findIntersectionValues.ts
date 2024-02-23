export function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const filterdNums1 = nums1.filter((num) => nums2.includes(num));
  const filterdNums2 = nums2.filter((num) => nums1.includes(num));

  return [filterdNums1.length, filterdNums2.length];
};