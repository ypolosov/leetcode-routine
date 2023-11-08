import { gcdOfStrings } from "./1071. Greatest Common Divisor of Strings";

describe("1071. Greatest Common Divisor of Strings", () => {
    it("gcdOfStrings 1", () => {
        const input = { str1: "ABCABC", str2: "ABC" };
        const output = "ABC";

        const result = gcdOfStrings(input.str1, input.str2);

        expect(result).toEqual(output);
    });

    it("gcdOfStrings 2", () => {
        const input = { str1: "ABABAB", str2: "ABAB" };
        const output = "AB";

        const result = gcdOfStrings(input.str1, input.str2);

        expect(result).toEqual(output);
    });

    it("gcdOfStrings 3", () => {
        const input = { str1: "LEET", str2: "CODE" };
        const output = "";

        const result = gcdOfStrings(input.str1, input.str2);

        expect(result).toEqual(output);
    });

    it("gcdOfStrings 4", () => {
        const input = { str1: "ABCDEF", str2: "ABC" };
        const output = "";

        const result = gcdOfStrings(input.str1, input.str2);

        expect(result).toEqual(output);
    });
});
