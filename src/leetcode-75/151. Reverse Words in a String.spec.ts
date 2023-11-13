import { reverseWords } from "./151. Reverse Words in a String";

describe("151. Reverse Words in a String", () => {
    it("reverseWords 1", () => {
        const input = { s: "the sky is blue" };
        const output = "blue is sky the";

        const result = reverseWords(input.s);

        expect(result).toEqual(output);
    });

    it("reverseWords 2", () => {
        const input = { s: "  hello world  " };
        const output = "world hello";

        const result = reverseWords(input.s);

        expect(result).toEqual(output);
    });
 
    it("reverseWords 3", () => {
        const input = { s: "a good   example" };
        const output = "example good a";

        const result = reverseWords(input.s);

        expect(result).toEqual(output);
    });
});
