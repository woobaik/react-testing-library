const { sum, sumOf } = require("./sum");

describe("sum", () => {
  it("calculates 1+2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    expect(sumOf([1, 2, 3, 4, 5])).toBe(15);
  });
});
