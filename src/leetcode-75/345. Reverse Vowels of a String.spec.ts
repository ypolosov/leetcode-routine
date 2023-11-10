import { reverseVowels } from "./345. Reverse Vowels of a String";

describe("345. Reverse Vowels of a String", () => {
    it("reverseVowels 1", () => {
        const input = { s: "hello"};
        const output = "holle";

        const result = reverseVowels(input.s);

        expect(result).toEqual(output);
    });

    it("reverseVowels 2", () => {
        const input = {s: "leetcode" };
        const output = "leotcede";

        const result = reverseVowels(input.s);

        expect(result).toEqual(output);
    });
});
