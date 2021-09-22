function fizzBuzz(counter, fizz, buzz){
    for(let i=1;i<counter+1;i++){
        if (!(i % fizz == 0 || i % buzz == 0)) console.log(i);
        if (i % fizz == 0 && i % buzz == 0) console.log(i + ' ' +  "FizzBuzz");
        if (i % fizz == 0) console.log(i + ' ' +  "Fizz");
        if (i % buzz == 0) console.log(i + ' ' +  "Buzz");
    }
}


