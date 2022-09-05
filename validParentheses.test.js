import validParentheses from "./validParentheses.js";

const string1 = "()";
const string2 = "(()()())";
const string3 = ")()()()(";
const string4 = "";
const string5 = "(";
const string6 = "(((((())))))";

describe ('validParentheses::', () => {
    it ('Test 1: ', () => {
        expect(validParentheses(string1)).toBe(true);
    });
    it ('Test 2: ', () => {
        expect(validParentheses(string2)).toBe(true);
    });
    it ('Test 3: ', () => {
        expect(validParentheses(string3)).toBe(false);
    });
    it ('Test 4: ', () => {
        expect(validParentheses(string4)).toBe(true);
    });
    it ('Test 5: ', () => {
        expect(validParentheses(string5)).toBe(false);
    });
    it ('Test 6: ', () => {
        expect(validParentheses(string6)).toBe(true);
    });
});
