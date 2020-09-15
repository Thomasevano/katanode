const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project', () => {

    const project = new Project()

    context('#fizzBuzz', () => {
        context('should return "Fizz" when value a multiple of 3', ()=>{
            it('should return "Fizz" when value equal 3', () => {
                //given
                const value = 3;
                //when
                const resultFizzBuzz =  project.fizzBuzz(value);
                //then
                expect(resultFizzBuzz).to.equal('Fizz');
            });

            it('should return "Fizz" when value equal 6', () => {
                //given
                const value = 6;
                //when
                const resultFizzBuzz =  project.fizzBuzz(value);
                //then
                expect(resultFizzBuzz).to.equal('Fizz');
            });
        });

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

         it('should return "Buzz" when value equal 5', () => {
            //given
            const value = 5;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal('Buzz');
         });

        it('should return "FizzBuzz" when value equal 15', () => {
            //given
            const value = 15;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal('FizzBuzz');
        });


        it('should return "Buzz" when value equal 10', () => {
            //given
            const value = 10;
            //when
            const resultFizzBuzz =  project.fizzBuzz(value);
            //then
            expect(resultFizzBuzz).to.equal('Buzz');
        });

    });
})
