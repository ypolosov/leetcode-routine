import { compress } from "./443. String Compression";

describe("443. String Compression", () => {
    it("compress 1", () => {
        const input = { chars: ["a","a","b","b","c","c","c"]};
        const output = 6;

        const result = compress(input.chars);

        expect(result).toEqual(output);
    });

    it("compress 2", () => {
        const input = { chars: ["a"]};
        const output = 1;

        const result = compress(input.chars);

        expect(result).toEqual(output);
    });

    it("compress 3", () => {
        const input = { chars: ["a","b","b","b","b","b","b","b","b","b","b","b","b"] };
        const output = 4;

        const result = compress(input.chars);

        expect(result).toEqual(output);
    });
});
