import { productExceptSelf } from "./238. Product of Array Except Self";

describe("238. Product of Array Except Self", () => {
    it("productExceptSelf 1", () => {
        const input = { nums: [1,2,3,4] };
        const output = [24,12,8,6];

        const result = productExceptSelf(input.nums);

        expect(result).toEqual(output);
    });

    it("productExceptSelf 2", () => {
        const input = { nums: [-1,1,0,-3,3] };
        const output = [0,0,9,0,0];

        const result = productExceptSelf(input.nums);

        expect(result).toEqual(output);
    });

    it("productExceptSelf 3", () => {
        const input = { nums: [1,-1] };
        const output = [-1,1];

        const result = productExceptSelf(input.nums);

        expect(result).toEqual(output);
    });
});
