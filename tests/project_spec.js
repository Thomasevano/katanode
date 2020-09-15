const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project Test', () => {

    const project = new Project()

    context('Expect', () => {
        it('should return 1', () => {
            //given
            const value = 1
            //when
            const fizzbuzz =  project.test(value)

            //then
            expect(fizzbuzz).to.equal(1)
        })
    })
})
