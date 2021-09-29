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

test("text if f return error message", () => {
  expect(() => {
    sum(4, "5");
  }).toThrowError(new Error("parameters must be numbers"));
});

const myRemove = require("./myRemove.js");
it("Teste o retorno", () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

const fizzBuzz = require("./fizzbuzz.js");

it("Retorno esperado fizz, buzz, fizzbuzz ou nan", () => {
  expect(fizzBuzz(15)).toBe("fizzbuzz");
  expect(fizzBuzz(3)).toBe("fizz");
  expect(fizzBuzz(5)).toBe("buzz");
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz("a")).toBe(false);
});
