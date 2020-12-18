const stats = require("./stats");

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max([1, 2, 3, 4, 5, 0])).toBe(5);
  });

  it("gets minimum value", () => {
    expect(stats.min([1, 2, 3, 4, 0, 9, 10])).toBe(0);
  });

  describe("median", () => {
    it("sort the array", () => {
      expect(stats.sort([4, 1, 5, 3, 2])).toEqual([1, 2, 3, 4, 5]);
    });

    it("if number of array is odd", () => {
      expect(stats.median([1, 2, 3])).toBe(2);
    });

    it("If number of array is even", () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });
});
