import "@testing-library/jest-dom/extend-expect";
import { validateEmail } from "../helper";

describe("testing help functions", () => {
    test("testing email format validation function", () => {
        const testEmailOne = "steve.com";
        expect(validateEmail(testEmailOne)).toBe(false);
        const testEmailTwo = "steve@qq.com";
        expect(validateEmail(testEmailTwo)).toBe(true);
    });
})