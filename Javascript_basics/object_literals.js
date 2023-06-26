//object literals 

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Col',
    blogs: ['Hello','testing']
}; 


console.log(user);
console.log(user.name);

// user.age = 35; 
console.log(user.age);

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);