const sum = require("./sum");

test("sum two values", () => {
  expect(sum(4, 5)).toBe(9);
});

test("sum 0 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("text if f return error", () => {
  expect(() => {
    sum(4, "5");
  }).toThrow();
});
