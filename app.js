console.log("Hello world");
let a=6;
let b=2;
console.log("Total sum is : ",a+b);
let output= `Total sum is : ${a+b}`;   // `` --> backtick
console.log(output);
console.log(`Total sum is : ${a+b}`);


//Arithmetic Operators
console.log(a+b); //8
console.log(a-b); //4
console.log(a*b); //12
console.log(a/b); //3
console.log(a%b); //0
console.log(a**b); //36

//unary operator
console.log(a++); //6
console.log(++a); //8
console.log(a--); //8
console.log(--a); //6

//Assigment operator (=,+=,-=,*=,/=,%=)
b=a;
console.log(b); //6

//comparison operator (>,>=,<,<=,==,!=)
let age=18;
console.log(age>18); //false
console.log(age>=18); //true
console.log(age<23); //true
console.log(age<=23); //true
console.log(age == 18); //true
console.log(age != 18); // false
let n=5;
let str='5';
console.log(n == str); //true (here, == compares value,not type)
console.log("123" == 123); //true
console.log(0 == ' '); //true
console.log(0 == false); //true
console.log(null == undefined); // false

console.log(n === str); //false (here, === compares value & type)
console.log("123" === 123); //false
console.log(0 === ' '); //false
console.log(0 === false); //false
console.log(null === undefined); //false

//comparison of non-numbers (here unicode is compared)
// 'a' ->61,'b' ->62 ....
// 'A' ->41,'B' ->42 ....

console.log('a' > 'A'); //true
console.log('a' > 'b'); //false
console.log('b' < 'c'); //true
console.log('B' < 'C'); //true
console.log('*' < '&'); //false

//conditional statements
let vote_age=18;
if(vote_age >= 18)
{
    console.log("you can vote");
}
else
{
    console.log("you cannot vote");
}

let color="white"

if(color=="red")
{
    console.log("Stop")
}
else if(color=="yellow")
{
    console.log("Slow down")
}
else if(color=="green")
{
    console.log("Go")
}
else
{
    console.log("Traffic light is broken")
}

//String Methods (strings in js are immutable)
let msg="  Hello  ";
console.log(msg.trim()); //trim method removes whitespaces from both ends and return a new string, it will change the original string.

let name="Ratin"
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.indexOf("Ratin")); //It returns the first index of occurrence of some value in string. Or gives -1 if not found.

let newmsg=msg.trim().toUpperCase(); //it is called method chaining
console.log(newmsg);

console.log(name.slice(2)); //returns a part of the original string as a new string.
console.log(name.slice(1,4));
console.log(name.slice(-2));

let str1="IloveCoding";
console.log(str1.replace("love","do"));
console.log(str1.replace("o","x"));

console.log(str1.repeat(3));

//Array (are mutable)
let students=["aman","raman","rajat"];
console.log(students);

let info=["raman",23,89.9];
console.log(info);
console.log(info.length);
console.log(info[0][0]); //returns first char of the string i.e. 'r'.
info[0]="shyam";
console.log(info);
info[10]="pandey";
console.log(info);
console.log(info.length); //now,size=11

let numArr=[]; // empty array
console.log(numArr);

//array methods
let cars=["audi","bmw","xuv","maruti"];
console.log(cars);
cars.push("toyota"); //add to end
console.log(cars);
cars.pop(); //delete from end and return it
console.log(cars);
cars.unshift("ferrari"); //add to start
console.log(cars);
cars.shift(); //delete from start and returns it
console.log(cars);

console.log(cars.indexOf("bmw")); //returns index of something

console.log(cars.includes("xuv")); //search for a value

console.log(cars.concat(info)); // merge 2 arrays

console.log(cars.reverse());// reverse an array

//slice(start,end)
console.log(cars.slice()); //returns a copy of original array
console.log(cars.slice(1)); //returns a copy of original array from index of 2
console.log(cars.slice(1,3)); //returns a copy of ogonal array starting from index 1 to 2.  
console.log(cars.slice(-1)); //returns from last

//splice : removes / replace / add elements in place
//splice(start,deleteCount,item0...itemN)
let colors=["red","white","yellow","pink","blue","orange"];
console.log(colors.splice(4)); //it acts like slice,but difference is that it changes in the original array also.
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

//IMPORTANT:-
//sort() method works well only on string,because it firstly converts the array elements in strings and then sorts them.
//if we have integers in our array then it sorts them in random order.
//sort method ko hum strings or character array pe hi use karenge. 
console.log(colors.sort());//sorts the array(in ansending order)

//Array References
let arr=['a','b'];
let arrCopy=arr;
console.log(arrCopy);
arrCopy.push('c');
console.log(arr);
console.log(arr==arrCopy); //true because both are pointing to same memeory address.

//Nested arrays(array of arrays)
let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
console.log(nums.length);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[0][0]);
console.log(nums[0][1]);
console.log(nums[1][0]);
console.log(nums[1][1]);
console.log(nums[2][0]);
console.log(nums[2][1]);
console.log(nums[2][2]); //error

//Creating a Object Literals
let student={
    name:"Ratin",
    age:21,
    marks:88,
    city:"Delhi"
};

const item={
    price:100.99,
    discount:50,
    colors:["red","blue"]
};

//Get values- there is 2 method to get the values...
console.log(item["price"]);//here price is 'key' not string.
console.log(item.price);//we can also access the price key by dot(.) operator

const obj={
    1:"a",
    2:"b",
    null:"c",
    undefined:"d",
    true:"e"
};
//Note, JS automatically converts objects keys to strings.
//Even if we made the number as a key, the number will be converted to string.
console.log(obj[1]);
//console.log(obj.1); // error, because dot operator not able to convert 1 into string...
console.log(obj.null); 

//Add/Update values:-
student.city="Mumbai";//here i'm updating the city from Delhi to Mumbai
console.log(student.city);

student.gender="Male";
console.log(student);

student.marks=[89,93,78];
console.log(student);

delete student.marks;//it returns true, means the key is deleted.
console.log(student);

//Object of Objects
const classInfo={
    Ratin:{
        grade:"A+",
        city:"Delhi"
    },
    Himanshu:{
        grade:"A",
        city:"Rishikesh"
    },
    Abhay:{
        grade:"A",
        city:"Dehradun"
    }
};

console.log(classInfo);
console.log(classInfo.Ratin);//whole info of Ratin is printed
console.log(classInfo.Ratin.city);//only city is printed
//updating values
classInfo.Ratin.city="Gurgaon";//updated city from Delhi to Gurgaon
console.log(classInfo.Ratin.city);
console.log(classInfo.Ratin);

//Array of Objects
const classdeltails=[
    {
        name:"Ratin",
        grade:"A+",
        city:"Delhi"
    },
    {
        name:"Himanshu",
        grade:"A",
        city:"Rishikesh"
    },
    {
        name:"Abhay",
        grade:"A",
        city:"Dehradun"
    }
];

console.log(classdeltails);
console.log(classdeltails[0]);
console.log(classdeltails[1]);
console.log(classdeltails[2]);
console.log(classdeltails[0].name);
console.log(classdeltails[0].city);
console.log(classdeltails[0].grade);
classdeltails[0].city="Banglore";
console.log(classdeltails[0].city);
classdeltails[0].gender="Male";
console.log(classdeltails[0]);