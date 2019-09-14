'use strict';

describe('<%= projectName %>', function () {
    const applicationEnvironment = require('../applicationEnvironment');
    const testEnvironment = require('./testEnvironment');

    testEnvironment.build('approvalResultFactory')();

    const sinon = testEnvironment.build('sinon');
    const { asInformationString } = testEnvironment.build('objectInformation');
    const { assert } = testEnvironment.build('chai');

    let testContext;

    beforeEach(function () {
        testContext = applicationEnvironment.new();
    });

    it('Runs Index', function() {
        const main = require('../index');
        //Do something
        //main();
        assert.isOk(false);
    });

    it('Runs main', function () {
        const main = testContext.build('main');
        //Do something
        //main();
        assert.isOk(false);
    });
});
