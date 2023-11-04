import { maximumWealth } from "./1672. Richest Customer Wealth";

describe("1672. Richest Customer Wealth", () => {
  it("maximumWealth 1", () => {
    const sourceData = [
      [1, 2, 3],
      [3, 2, 1],
    ];
    const expectedValue = 6;

    const result = maximumWealth(sourceData);

    expect(result).toBe(expectedValue);
  });

  it("maximumWealth 2", () => {
    const sourceData = [
      [1, 5],
      [7, 3],
      [3, 5],
    ];
    const expectedValue = 10;

    const result = maximumWealth(sourceData);

    expect(result).toBe(expectedValue);
  });

  it("maximumWealth 3", () => {
    const sourceData = [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ];
    const expectedValue = 17;

    const result = maximumWealth(sourceData);

    expect(result).toBe(expectedValue);
  });
});
