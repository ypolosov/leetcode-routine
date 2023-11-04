import { numberOfSteps } from "./1342. Number of Steps to Reduce a Number to Zero";

describe("1342. Number of Steps to Reduce a Number to Zero", () => {
  it("numberOfSteps 1", () => {
    const input = 14;
    const output = 6;

    const result = numberOfSteps(input);

    expect(result).toBe(output);
  });

  it("numberOfSteps 2", () => {
    const input = 8;
    const output = 4;

    const result = numberOfSteps(input);

    expect(result).toBe(output);
  });

  it("numberOfSteps 3", () => {
    const input = 123;
    const output = 12;

    const result = numberOfSteps(input);

    expect(result).toBe(output);
  });
});
