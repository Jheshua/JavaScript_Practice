//let hola = "Test";
//console.log(hola);

// foor loops
for(let i=0; i<5; i++){
    console.log('in loop', i);
}

//practice with array
const names= ['Mario','Jheshua','Luigi'];
for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

//While 
let x = 0;
while (x<5){
    console.log(x);
    x++;
}
const names1= ['Mario','Jheshua','Luigi'];
let z = 0;
while(z < names1.length){
    console.log(names1[z]);
    z++;
}

// Do while loop
let k = 0; 
do{
    console.log('Value: ' ,k);
    k++;
} while ( k < 5);


// if statements

const kok = 21;
if(kok > 20 ){
    console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'ryu','jhesha','chun-li']; 
if (ninjas.length > 3 ){
    console.log('that is a lot of ninjas');
}

const password = 'passd';

if(password.length >= 12){
    console.log('this password is might strong');
}
else if(password.length >= 8){
    console.log('that password is long ennough');
} else {
    console.log('The password is not long enough');
}

//logical NOT (!) negates the truth value of a boolean expression, resulting in the opposite boolean value.

let user = false;

if(!user){
    console.log('You must be loged-in to continue');
} 

//Example of switch case 

const numkl = 'A';

switch (numkl) {
  case 'A':
    console.log('El valor es A');
    break;
  case 'B':
    console.log('El valor es B');
    break;
  case 'C':
    console.log('El valor es C');
    break;
  case 'D':
    console.log('El valor es D');
    break;
  default:
    console.log('El valor no coincide con ninguna opción');
}








