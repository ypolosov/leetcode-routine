import { runningSum } from "./1480. Running Sum of 1d Array";

describe("1480. Running Sum of 1d Array", () => {
  it("runningSum 1", () => {
    const expectedValue = [1, 3, 6, 10];
    const sourceData = [1, 2, 3, 4];

    const result = runningSum(sourceData);

    expect(result).toEqual(expectedValue);
  });

  it("runningSum 2", () => {
    const expectedValue = [1,2,3,4,5];
    const sourceData = [1,1,1,1,1];

    const result = runningSum(sourceData);

    expect(result).toEqual(expectedValue);
  });

  it("runningSum 3", () => {
    const expectedValue = [3,4,6,16,17];
    const sourceData = [3,1,2,10,1];

    const result = runningSum(sourceData);

    expect(result).toEqual(expectedValue);
  });
});
