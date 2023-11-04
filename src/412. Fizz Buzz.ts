export function fizzBuzz(n: number): string[] {
  const arr = [];
  const fizzBuzz = "FizzBuzz";
  const fizz = "Fizz";
  const buzz = "Buzz";
  for (let i = 1, j = 0; i <= n; i++, j++) {
    const divideBy3 = i % 3 == 0;
    const divideBy5 = i % 5 == 0;
    const divideBy3and5 = divideBy3 && divideBy5;
    if (divideBy3and5) {
      arr[j] = fizzBuzz;
    } else if (divideBy3) {
      arr[j] = fizz;
    } else if (divideBy5) {
      arr[j] = buzz;
    } else {
      arr[j] = i.toString();
    }
  }
  return arr;
}
