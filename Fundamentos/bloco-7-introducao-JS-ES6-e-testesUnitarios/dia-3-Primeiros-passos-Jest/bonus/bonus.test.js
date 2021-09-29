const searchEmployee = require("./bonus");
const searchEmploye = require("./bonus");

describe("Fnct SearchEmployee", () => {
  test("Has function", () => {
    expect(typeof searchEmployee).toBe("function");
  });

  test("id existente e atributente existente", () => {
    expect(searchEmployee("1256-4", "specialities")).toContain(
      "Hooks",
      "Context API",
      "Tailwind CSS"
    );
  });

  test("id inexistente - retorno erro", () => {
    expect(() => searchEmployee("0000", "specialities")).toThrow();
  });

  test("id inexistente - erro - id não identificada", () => {
    expect(() => searchEmployee("0000", "specialities")).toThrowError(
      new Error("ID não identificada")
    );
  });

  test("id existente e atributo inexistente", () => {
    expect(() => searchEmployee("1256-4", "teste")).toThrowError(
      new Error("Informação indisponível")
    );
  });

  test("id existente e atributente existente", () => {
    expect(searchEmployee("1256-4", "firstName")).toBe("Linda");
  });
});
