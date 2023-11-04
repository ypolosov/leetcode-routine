import { fizzBuzz } from "./412. Fizz Buzz";

describe("412. Fizz Buzz", () => {
  it("fizzBuzz 1", () => {
    const input = 3;
    const output = ["1", "2", "Fizz"];

    const result = fizzBuzz(input);

    expect(result).toEqual(output);
  });

  it("fizzBuzz 2", () => {
    const input = 5;
    const output = ["1", "2", "Fizz", "4", "Buzz"];

    const result = fizzBuzz(input);

    expect(result).toEqual(output);
  });

  it("fizzBuzz 3", () => {
    const input = 15;
    const output = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ];

    const result = fizzBuzz(input);

    expect(result).toEqual(output);
  });
});
