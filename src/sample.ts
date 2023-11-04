function count(x: number) {
    const xX = x.toString(2);
    const cutxX = xX;
    const xArray = Array.from(cutxX);
    return xArray.reduce((p, c) => {
        return c == "1" ? ++p : p;
      }, 0);
}

export function sortByBits(arr: number[]): number[] {
  const result: number[] = arr.sort((a, b) => {
    const aX = count(a);
    const bX = count(b)
    return aX == bX ? a - b : aX - bX;
  });
  return result;
}

export const doSomething = () => {
  const result = "something";
  console.log(JSON.stringify(`result is '${result}'`, null, "  "));
  return result;
};

export const doSomethingAsync = async () => {
  const result = "somethingAsync";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(JSON.stringify(`result is '${result}'`, null, "  "));
      resolve(result);
    }, 300);
  });
  return promise;
};

export enum CardTypeEnum {
  REGULAR = 1,
  WARN = 2,
  ERROR = 3,
}

export interface Card {
  title: string;
  price: number;
  type: CardTypeEnum;
}

export interface CardsResult {
  joinedTitle: string;
  sumPrice: number;
  availableCardTypes: Array<string>;
}
