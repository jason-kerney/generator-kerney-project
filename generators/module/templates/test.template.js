'use strict';

describe('<%= fileName %>', function () {
    const applicationEnvironment = require('../app/applicationEnvironment');
    const testEnvironment = require('./testEnvironment');

    testEnvironment.build('approvalsConfigFactory')();

    const { asInformationString } = testEnvironment.build('objectInformation');
    const { assert } = testEnvironment.build('chai');

    let <%= fileVarName %>;

    beforeEach(function () {
        const testContext = applicationEnvironment.new();
        <%= fileVarName %> = testContext.build('<%= fileVarName %>');
    });

    it('should have a failing test -- delete this test!', function () {
        assert.isTrue(false);
    });
});
