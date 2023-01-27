const reverseString = require("../src/reverseString.js");

test("Reverse a string", () => {
    expect(reverseString("abcde")).toBe("edcba");
});