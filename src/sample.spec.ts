import {
  Card,
  CardTypeEnum,
  CardsResult,
  doSomething,
  doSomethingAsync,
  sortByBits,
} from "./sample";

const expectedValue = "something";
const expectedAsyncValue = "somethingAsync";
const expectedCardsResult: CardsResult = {
  joinedTitle: "Card 1, Card 2, Card 3",
  sumPrice: 450,
  availableCardTypes: ["REGULAR", "WARN", "ERROR"],
};

const sourceArray: Array<Card> = [
  {
    title: "Card 1",
    price: 100,
    type: CardTypeEnum.REGULAR,
  },
  {
    title: "Card 2",
    price: 150,
    type: CardTypeEnum.WARN,
  },
  {
    title: "Card 3",
    price: 200,
    type: CardTypeEnum.ERROR,
  },
];


describe("Math functions", () => {
  
  fit("sortByBits",  () => {
    const sourceData = [0,1,2,3,4,5,6,7,8];
    const expectedResult = [0,1,2,4,8,3,5,6,7];
    const result = sortByBits(sourceData);
    expect(result).toEqual(expectedResult);
  });

  it("test 1", async () => {
    const result = doSomething();
    expect(result).toBe(expectedValue);
  });

  it("test 2", async () => {
    const result = await doSomethingAsync();
    // expect(true).toBe(true);
    expect(result).toBe(expectedAsyncValue);
  });

  it("test 3", () => {
    const result = sourceArray.reduce((previousItem, currentItem) => {
      return {
        joinedTitle: previousItem.joinedTitle
          ? `${previousItem.joinedTitle}, ${currentItem.title}`
          : currentItem.title,
        sumPrice: previousItem.sumPrice
          ? previousItem.sumPrice + currentItem.price
          : currentItem.price,
        availableCardTypes: previousItem.availableCardTypes
          ? [...previousItem.availableCardTypes, CardTypeEnum[currentItem.type]]
          : [CardTypeEnum[currentItem.type]],
      };
    }, {} as CardsResult);
    console.log(JSON.stringify(result, null, "  "));
    expect(result).toMatchObject(expectedCardsResult);
  });
});
