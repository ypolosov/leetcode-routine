import { canConstruct } from "./383. Ransom Note";

describe("383. Ransom Note", () => {
    it("canConstruct 1", () => {
        const input = { ransomNote: "a", magazine: "b" };
        const output = false;

        const result = canConstruct(input.ransomNote, input.magazine);

        expect(result).toEqual(output);
    });

    it("canConstruct 2", () => {
        const input = { ransomNote: "aa", magazine: "ab" };
        const output = false;

        const result = canConstruct(input.ransomNote, input.magazine);

        expect(result).toEqual(output);
    });

    it("canConstruct 3", () => {
        const input = { ransomNote: "aa", magazine: "aab" };
        const output = true;

        const result = canConstruct(input.ransomNote, input.magazine);

        expect(result).toEqual(output);
    });
});
