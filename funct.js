//create a Function to roll a dice & display the value of the dice (1 to 6)

function rollDice()
{
    let rand=Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

//Function with Arguements
//create a function that gives us the average of 3 numbers

function average(n1,n2,n3)
{
    let avg=(n1+n2+n3)/3;
    console.log("Average is : ",avg);
}

average(18,56,87);

//create a Function that prints the multiplication table of a number.
function printTable(n)
{
    for(let i=n;i<=n*10;i+=n)
    {
        console.log(i);
    }
}

printTable(3);

//create a Function that returns the sum of numbers from 1 to n.
function getSum(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}

console.log("Total sum is : ",getSum(5));

//create a Function that returns the concatenation of all strings in an array
let str=["hi","hello","bye","!"];

function concat(str)
{
    let ans="";
    for(let i=0;i<str.length;i++)
        {
            ans+=str[i];
        }
        return ans;
}

console.log(concat(str));


//Scope : It determines the accessibility of variables,objects,and functions from diffrent parts of the code.
//Global scope
//Function scope
//Lexical Scope : A variable defined outside a function can be accessible inside another function defined after the variable declaration. The opposite is NOT TRUE.

let greet="hello"; //global scope

function chnageGreet()
{
    let greet="namaste"; //function scope
    console.log(greet);

    function innerGreet()
    {
        console.log(greet); //lexical scope
    }

    innerGreet();
}

console.log(greet);
chnageGreet();


//Function as Expressions
let sum=function(a,b)
{
    return a+b;
}

console.log(sum(1,3));


//Higher Order Functions
function multipleHello(func,count) //higher order function
{
    for(let i=1;i<=count;i++)
        {
            func();
        }
}

let abc=function()
{
    console.log("hello");
}

multipleHello(abc,10); //It prints 10 times hello.


//Methods : Actions that can be performed on an object.
const calculator={
    add(a,b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    },
    mul: function(a,b) //we can write like that also.
    {
        return a*b;
    }
};

console.log(calculator.add(5,6));
console.log(calculator.sub(10,4));
console.log(calculator.mul(6,3));


//this keyword
const student = {
    name:"Ratin",
    age:21,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);//will tell what is value of this keyword
        let avg=(this.eng+this.math+this.phy)/3; //to access marks from above we need to write this kerword before variable in method.
        console.log(avg);
        console.log(this.name+" got avg marks = "+avg);
    }
};

console.log(student.getAvg());

//try and catch 
console.log("Hello");
console.log("Hello");
try{
    console.log(a);
}
catch(err){
    console.log("Variable is not defined...");
    console.log(err);//it will print what the error in the code..
}
console.log("Hello2");
console.log("Hello2");

//Arrow Functions
const Sum=(a,b) => {console.log(a+b);};
console.log(Sum(2,3));

const cube=(n) => {
    return n*n*n;
};
console.log(cube(3));

const pow=(a,b) => {
    return a**b;
};
console.log(pow(2,3));

//Implicit return in Arrow functions
const mul=(a,b) => (a*b); //we write like that also,this is called implicit return..
console.log(mul(18,2));

//Set Timeout function -> inbuilt function defined in window object.
//setTimeout(funcion(callback),timeout(time in milisecond))  for 1 sec. we need to write 1000ms. 
console.log("Hi there!"); 
setTimeout( ()=> {
    console.log("Mumbai");
},4000);
console.log("welcome to");

//Set Interval function
//setInterval(function,timeout)
let id = console.log("Hi there!"); 
setInterval=( ()=> {
    console.log("Mumbai");
},2000);

clearInterval(id); //this will stops the work in between when we want, we have only pass the id of that function.

//Ques: write a func that prints "Hello wrorld" 5 times at intervals of 2s each
let id2 = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id2);
    console.log("clear interval ran");
}, 10000);
 
