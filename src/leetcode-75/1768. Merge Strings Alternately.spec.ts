import { mergeAlternately } from "./1768. Merge Strings Alternately";

describe("1768. Merge Strings Alternately", () => {
    it("mergeAlternately 1", () => {
        const input = { word1: "abc", word2: "pqr" };
        const output = "apbqcr";

        const result = mergeAlternately(input.word1, input.word2);

        expect(result).toEqual(output);
    });

    it("mergeAlternately 2", () => {
        const input = { word1: "ab", word2: "pqrs" };
        const output = "apbqrs";

        const result = mergeAlternately(input.word1, input.word2);

        expect(result).toEqual(output);
    });

    it("mergeAlternately 3", () => {
        const input = { word1: "abcd", word2: "pq" };
        const output = "apbqcd";

        const result = mergeAlternately(input.word1, input.word2);

        expect(result).toEqual(output);
    });
});
