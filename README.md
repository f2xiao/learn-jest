# learn-jest

## Getting Started
JASMINE FOR NODE.JS

Add Jasmine to your package.json   
    
    npm install --save-dev jasmine
Initialize Jasmine in your project

    npx jasmine init

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
