import { kidsWithCandies } from "./1431. Kids With the Greatest Number of Candies";

describe("1431. Kids With the Greatest Number of Candies", () => {
    it("kidsWithCandies 1", () => {
        const input = { candies: [2, 3, 5, 1, 3], extraCandies: 3 };
        const output = [true, true, true, false, true];

        const result = kidsWithCandies(input.candies, input.extraCandies);

        expect(result).toEqual(output);
    });

    it("kidsWithCandies 2", () => {
        const input = { candies: [4, 2, 1, 1, 2], extraCandies: 1 };
        const output = [true, false, false, false, false];

        const result = kidsWithCandies(input.candies, input.extraCandies);

        expect(result).toEqual(output);
    });

    it("kidsWithCandies 3", () => {
        const input = { candies: [12, 1, 12], extraCandies: 10 };
        const output = [true, false, true];

        const result = kidsWithCandies(input.candies, input.extraCandies);

        expect(result).toEqual(output);
    });
});
