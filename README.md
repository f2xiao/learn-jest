# learn-jest

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

    it('logic explains what the test is doing', function(){    /* ... */})

        
### Expectations
Expectations compose the spec and are used along with matcher functions (via chaining) to define what the developer expect from a specific unit of code to perform.
Created using syntax:

    // it should expect actual value to be expected value 
    it("logic explains what the test is doing", function () {
            expect([actualValue]).matcherFn([expectedValue]);
        });

### Matchers
A matcher function compares between an actual value (passed to the expect() function it's chained with) and an expected value (directly passed as a parameter to the matcher) and returns either true or false which either passes or fails the spec.
### Spies