import expect from "expect";

import { orderTopThree } from "./Projects.utils";

describe("orderTopThree", function () {
  it("Should return top three in podium order", function () {
    const list = ["one", "two", "three"];
    const result = orderTopThree(list);
    const expectedResult = ["two", "one", "three"];

    expect(result).toEqual(expectedResult);
  });
});
