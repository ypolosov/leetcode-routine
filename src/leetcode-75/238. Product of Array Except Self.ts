export function productExceptSelf(nums: number[]): number[] {
    const arr: number[] = [];
    const left_product: number[] = [];
    const right_product: number[] = [];

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        left_product[i] = i == 0 ? nums[i] : nums[i] * left_product[i - 1];
        right_product[j] = j == nums.length - 1 ? nums[j] : nums[j] * right_product[j + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            arr[i] = right_product[i + 1] + 0;
        } else if (i == nums.length - 1) {
            arr[i] = left_product[i - 1] + 0;
        } else {
            arr[i] = left_product[i - 1] * right_product[i + 1] + 0
        }
    }
    return arr;
}