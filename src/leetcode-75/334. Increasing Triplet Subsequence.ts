export function increasingTriplet(nums: number[]): boolean {
    let minFirst = Number.MAX_VALUE;
    let minSecond = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        if (minSecond < nums[i]) {
            return true;
        }
        if (minFirst < nums[i] && nums[i] < minSecond) {
            minSecond = nums[i];
        }
        if (nums[i] < minFirst) {
            minFirst = nums[i];
        }
    }
    return false;
};