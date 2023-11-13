export function increasingTriplet(nums: number[]): boolean {
    let firstMin = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;
    if(nums.length < 3){
        return false;
    }
    for (let n = 0; n < nums.length; n++) {
        if ( nums[n] <= firstMin) {
            firstMin = nums[n];
        }else if(nums[n] <= secondMin ){
            secondMin = nums[n]
        }else {
            return true;
        }
    }
    return false;
};