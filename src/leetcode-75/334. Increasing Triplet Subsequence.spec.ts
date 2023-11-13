import { increasingTriplet } from "./334. Increasing Triplet Subsequence";

describe("334. Increasing Triplet Subsequence", () => {
    it("increasingTriplet 1", () => {
        const input = { nums: [1,2,3,4,5] };
        const output = true;

        const result = increasingTriplet(input.nums);

        expect(result).toEqual(output);
    });

    it("increasingTriplet 2", () => {
        const input = { nums: [5,4,3,2,1]};
        const output = false;

        const result = increasingTriplet(input.nums);

        expect(result).toEqual(output);
    });

    it("increasingTriplet 3", () => {
        const input = { nums: [2,1,5,0,4,6] };
        const output = true;

        const result = increasingTriplet(input.nums);

        expect(result).toEqual(output);
    });

    it("increasingTriplet 4", () => {
        const input = { nums: [20,100,10,12,5,13] };
        const output = true;

        const result = increasingTriplet(input.nums);

        expect(result).toEqual(output);
    });

    it("increasingTriplet 5", () => {
        const input = { nums: [20,100,10,12,5,13] };
        const output = true;

        const result = increasingTriplet(input.nums);

        expect(result).toEqual(output);
    });
});
