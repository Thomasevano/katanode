class Project {

    constructor(){
    }

    test(value){
    }

    testFunction(){
        this.mockFunction()
        return this.stubFunction()
    }

    mockFunction(){
        return -1;
    }

    stubFunction(){
        return 1
    }

    exceptionFunction(){
         throw new Error('Exception Catch');
    }

}

module.exports = Project
