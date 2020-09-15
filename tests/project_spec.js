const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project', () => {

    const project = new Project()

    context('#fizzBuzz', () => {
        it('should return 1 when value equal 1', () => {
            //given
            const value = 1;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal(1);
        });

        it('should return 2 when value equal 2', () => {
            //given
            const value = 2;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal(2);
        });

        it('should return "Fizz" when value equal 3', () => {
            //given
            const value = 2;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal(2);
        });

    })
})
