class Project {


    fizzBuzz(value){
        
        const valueWhenIsMultipleOf15 = 'FizzBuzz';
        const valueWhenIsMultipleOf5 = 'Buzz';
        const valueWhenIsMultipleOf3 = 'Fizz';

        if(this.isMultipleOf(value, 15)){
            return valueWhenIsMultipleOf15;
        }
        if(this.isMultipleOf(value, 5)){
            return valueWhenIsMultipleOf5;
        }
        if(this.isMultipleOf(value, 3)){
            return valueWhenIsMultipleOf3;
        }
        return value;
    }

    isMultipleOf(value, moduloValue){
        return value%moduloValue === 0
    }
    
}

module.exports = Project
