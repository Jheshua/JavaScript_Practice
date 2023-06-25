//alert("Hello World");
console.log(3);

//Variables
let age = 25;
let year = 2019
console.log(age, year);

//constante
const asd = 100; 
console.log(asd);



/* JS data dypes
    Number     1,2,3,4,5
    String    "hello World"
    boolean   True/False
    Null   Explicity set a variable with no value
    Undefiend    For variables that have not yet been defined
    object   Arrays/Dates/Literals etfc
    Symbol   used with objects

 */



    //Strings
console.log('Hello world');

let email = 'jheshua.jaramillo@hotmmail.com'
console.log(email);

//String concatenation
let firstName = 'Jheshua';
let lastName = 'jaramillo'
let fullName = firstName + " " +lastName
console.log(fullName)

// getting characters 
console.log(fullName[0]); // Same concept as other programming languages, it all start with 0 

// Getting the length of the string
console.log(fullName.length);

//String methods 
console.log(fullName.toUpperCase());

//taking the exact index of a character
let index = email.indexOf('@');
console.log(index);

//common string methods 
//Slice to separate characters or sectiosn
let sep = email.slice(0,10); //from 0 to 10
console.log(sep);

let sub = email.substring(4,10);
console.log(sub);

let sub1 = email.replace('j','k'); //replace a single character (the first )with another characteer
console.log(sub1);

//Template string way
const nombre = 'Jheshua';
const apellido = 'Jaramillo';
const edad = 23;
let resultado = `El nombre ${nombre} con appelido ${apellido} tiene ${edad} años`;
console.log(resultado);

//html templates 

let html = `
    <h2> ${nombre} </h2>
    <p> ${apellido} </p>
    <span> ${edad} </span>
`;
console.log(html)


// ARRAYS 
//this follows the same concept and order as the other programming languages 
let ninjas = ['Jheshua','John','chun-li']; 
ninjas[1]='ken'
console.log(ninjas[1]);

let agesme = [20,39,19,24];
console.log(agesme[2]);

let random = ['shano','asdas',20,30];
console.log(random);

console.log(ninjas.length); // count how many items are in the array

//array methods 
let result = ninjas.join(',');
let result1 = random.indexOf('asdas'); // to check the index of something that we want
let result2 = random.concat(['pen','tipe']); // for example to combine (concatenar) 2 arrays 
let result3 = random.push('ken'); // remember that when we use push, the new data is added directly into the array so we need to call again the array and not the variable 
let deletea = random.pop();// this is going to delete the last value of the array 
console.log(result3);


//methods can return booleans

let em = 'jheshua@gmail.com';
let rea = em.includes('@'); // This is gonna tell me if '@' exists in the variable em, if yes, is going to return True, if not is gonna be False (Booleans)
let caa = ['mario','luigi','josh'];
let czza = caa.includes('mario'); // same thing but this time using ARRAYS
console.log(czza);

// comparison operators
let agea = 25;
console.log(agea==25); // we can change == for other comparasion operators such as != same as other langagues
// strict comparasion 

console.log(agea === 25); // remember that if we use agea=='25' even if this is a string, JS transforms the data type so would be true.



//type conversion
let score = '100';
score = Number(score); // we transform the '100' string to 100 int using Number
console.log(score + 1 ); 
console.log(typeof score); // to see the data type of a variable


let trana = 50; // transforming from int to string 
trana = String(trana)
console.log(typeof trana);



