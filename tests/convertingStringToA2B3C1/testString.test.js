const testString = require("./testString");

describe("testString", () => {
  test("Стандартное зачение", () => {
    expect(testString("AAAABBBCCCCEEAA")).toEqual("A4B3C4E2A2");
  });
  test("Пустая строка", () => {
    expect(testString("")).toEqual("");
  });
  test("Числа", () => {
    expect(testString("33442255")).toEqual("");
  });
});
