# learn-jest

> Original Source: [An Introduction to Jasmine Unit Testing] (https://www.freecodecamp.org/news/jasmine-unit-testing-tutorial-4e757c2cbf42/)

## Getting Started
JASMINE FOR NODE.JS

Add Jasmine to your package.json   
    
    npm install --save-dev jasmine
Initialize Jasmine in your project

    npx jasmine init

The above command uses `npx` instead since jasmine is installed locally, if installed gloabbly you can use `jasmine init` but not recommended.

The above command will create a spec folder and a JSON configure file for jasmine as the following:
 
    .
    └───SPEC
        └───support
                └───jasmine.json

Set jasmine as your test script in your package.json

    "scripts": { "test": "jasmine" }
Run your tests

    npm test

## Understanding Jasmine
The basic elements of Jasmine testing include suites, specs, expectations, matchers and spies, etc.

### Suites
A suite groups a set of specs or test cases.
Created using syntax:
    
    describe("[SuiteName]", function() { /* ... */ });

Group and nest suites using syntax:
```
    describe("[TopLevelSuiteName]", function() {
        describe("SubLevelSuiteNameA", function() { /*...*/});
        describe("SubLevelSuiteNameB", function() { 
            describe("SubSubLevelSuiteNameBA", function() {   /* ... */ }); 
            describe("SubSubLevelSuiteNameBB", function() {   /* ... */ });
        });
     });
```   
### Specs
A spec declares a test case that belongs to a test suite.
Created using syntax:

    it('logic explains what the test is doing', function(){    /* a spec or a test */})

        
### Expectations
Expectations compose the spec and are used along with matcher functions (via chaining) to define what the developer expect from a specific unit of code to perform.
Created using syntax:

    // it should expect actual value to be expected value 
    it("logic explains what the test is doing", function () {
            expect([actualValue]).matcherFn([expectedValue]);
        });

### Matchers
A matcher function compares between an actual value (passed to the expect() function it's chained with) and an expected value (directly passed as a parameter to the matcher) and returns either true or false which either passes or fails the spec.

#### Custom Matchers
created using syntax:
```
jasmine.addMatchers({
    hasEvenMethod: function (util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                var result = { pass: utils.isEven !== undefined };
                if (result.pass) {
                    result.message = "Expected isEven() to be not defined."
                } else {
                    result.message = "Expected isEven() to be defined."
                }
                    return result;
            }
        }
    }
});

```
We create custom matchers using the `addMatchers()` method which takes an object comprised of one or many properties that will be added as matchers. Each property should provide a factory function that takes two parameters: `util`, which has a set of utility functions for matchers to use and `customEqualityTesters` which needs to be passed in if `util.equals` is called, and should return an object with a `compare` function that will be called to check the expectation. We need to register the custom matcher before executing each spec using the beforeEach() method:

    beforeEach(function(){
         jasmine.addMatchers(/* ... */)
    })

#### Using beforeEach() and afterEach()
The `beforeEach` function is called once before each spec in the suite where it is called.

The `afterEach` function is called once after each spec in the suite where it's called.

#### Failing a test
Created using syntax:

    it("should explicitly fail", function () {
        fail('Forced to fail');
    });
#### Testing for Exceptions
Created using syntax:

    it('it should throw a TypeError', function () { 
        expect(throwsError).toThrowError(TypeError); 
    });

### Spies (监听)
More often than not, methods depend on other methods. This means that when you are testing a method, you may also end up testing its dependencies. This is not recommended in testing i.e you need to make sure you test the pure function by isolating the method and seeing how it behaves given a set of inputs.
Jasmine provides spies which can be used to spy on/listen to method calls on objects and report if a method is called and with which context and arguments.

Jasmine provides two ways for spying on method calls: using the spyOn() or the createSpy() methods.

You can use spyOn() when the method already exists on the object, otherwise you need to use jasmine.createSpy() which returns a new function.

Created using syntax: 

    spyOn([ObjName], '[methodName]')
    spytoUpperCase = spyOn(String.prototype, 'toUpperCase')

The above method check if our `toUpperCase` is making use of `String.toUpperCase` by spy on the `toUpperCase` the String.prototype object.

