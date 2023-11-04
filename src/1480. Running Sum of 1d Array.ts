export function runningSum(nums: number[]): number[] {
  const arr = nums.reduce((p, c) => {
    if (p.length == 0) {
      return [c];
    }
    return p.concat(p[p.length - 1] + c);
  }, [] as number[]);
  return arr;
}
