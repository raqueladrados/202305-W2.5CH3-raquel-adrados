import { fizzBuzz } from "./fizzBuzz.js";
describe("Given a function", () => {
    describe("When it receives 2 and 10", () => {
        test("[2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz]", () => {
            const numberInitial = 2;
            const numberFinal = 10;
            const expectedResult = [
                2,
                "Fizz",
                4,
                "Buzz",
                "Fizz",
                7,
                8,
                "Fizz",
                "Buzz",
            ];
            const result = fizzBuzz(numberInitial, numberFinal);
            expect(result).toStrictEqual(expectedResult);
        });
    });
    describe("When it receives 1 and 20", () => {
        test(" [1, 2, Fizz, 4, Buzz, 'Fizz', 7, 8, 'Fizz', Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz]", () => {
            const numberInitial = 1;
            const numberFinal = 20;
            const expectedResult = [
                1,
                2,
                "Fizz",
                4,
                "Buzz",
                "Fizz",
                7,
                8,
                "Fizz",
                "Buzz",
                11,
                "Fizz",
                13,
                14,
                "FizzBuzz",
                16,
                17,
                "Fizz",
                19,
                "Buzz",
            ];
            const result = fizzBuzz(numberInitial, numberFinal);
            expect(result).toStrictEqual(expectedResult);
        });
    });
});
