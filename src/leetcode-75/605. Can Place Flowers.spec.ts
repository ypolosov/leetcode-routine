import { canPlaceFlowers } from "./605. Can Place Flowers";

describe("605. Can Place Flowers", () => {
    it("canPlaceFlowers 1", () => {
        const input = { flowerbed: [1,0,0,0,1], n: 1};
        const output = true;

        const result = canPlaceFlowers(input.flowerbed, input.n);

        expect(result).toEqual(output);
    });

    it("canPlaceFlowers 2", () => {
        const input = { flowerbed: [1,0,0,0,1], n: 2 };
        const output = false;

        const result = canPlaceFlowers(input.flowerbed, input.n);

        expect(result).toEqual(output);
    });

    it("canPlaceFlowers 3", () => {
        const input = { flowerbed: [1,0,0,0,0,0,1], n: 2 };
        const output = true;

        const result = canPlaceFlowers(input.flowerbed, input.n);

        expect(result).toEqual(output);
    });

    it("canPlaceFlowers 4", () => {
        const input = { flowerbed: [0,0,1,0,1], n: 1 };
        const output = true;

        const result = canPlaceFlowers(input.flowerbed, input.n);

        expect(result).toEqual(output);
    });
});
