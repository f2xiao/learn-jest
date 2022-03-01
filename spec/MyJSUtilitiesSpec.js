const utils = require("../index.js");

describe("MyJSUtilities", function () {
    describe("String Utils", function () {
        // it should expect actual value to be expected value 
        it("should be able to lower case a string", function () {
            expect(utils.toLowerCase).toBeDefined();
            expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");
        });

        it("should be able to upper case a string", function () {
            expect(utils.toUpperCase).toBeDefined();
            expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD")
        });
        it("should be able to confirm if a string contains a substring", function () {
            expect().nothing();
        });
        it("should be able repeat a string multiple times", function () {
            expect().nothing();
        });
    });
    describe("Math Utils", function () {
        describe("Basic Math Utils", function () {
            it("should be able to tell if a number is even", function () {
                expect().nothing();
            });
            it("should be able to tell if a number is odd", function () {
                expect().nothing();
            });
        });
        describe("Advanced Math Utils", function () {
            it("should be able to tell if a number is prime", function () {
                expect().nothing();
            });
            it("should be able to calculate the fibonacci of a number", function () {
                expect().nothing();
            });
        });
    });
});
