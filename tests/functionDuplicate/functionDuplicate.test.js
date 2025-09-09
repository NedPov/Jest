const functionDuplicate = require("./functionDuplicate");

describe("functionDuplicateEmails", () => {
  test("Стандартное значение", () => {
    const emailsArr = [
      "lyhxr@example.com",
      "lyhxr@example.com",
      "masha@example.com",
      "fedya@example.com",
      "katya@example.com",
      "fedya@example.com",
      "katya@example.com",
      "lyhxr@example.com",
    ];
    expect(functionDuplicate(emailsArr)).toEqual([
      "lyhxr@example.com",
      "fedya@example.com",
      "katya@example.com",
    ]);
  });

  test("Пустая строка", () => {
    expect(functionDuplicate("")).toEqual([]);
  });

  test("Без повторений", () => {
    const emailsArrUnique = [
      "lyhxr@example.com",
      "masha@example.com",
      "fedya@example.com",
      "katya@example.com",
    ];
    expect(functionDuplicate(emailsArrUnique)).toEqual([]);
  });

  test("Только дубликаты", () => {
    const emailsArrDuplicate = [
      "lyhxr@example.com",
      "lyhxr@example.com",
      "lyhxr@example.com",
      "lyhxr@example.com",
      "lyhxr@example.com",
      "lyhxr@example.com",
    ];
    expect(functionDuplicate(emailsArrDuplicate)).toEqual(["lyhxr@example.com"]);
  });
});
