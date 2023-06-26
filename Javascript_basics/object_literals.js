/* //object literals 

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

console.log(typeof user); */

/* let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Col',
    blogs: ['Hello','testing'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('The user logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
}; 

user.logBlogs();
console.log(this);
 */


/* const blogs = [
    { tittle: 'Hello', likes: 30},
    { tittle: 'Testing', likes: 50}
];
console.log(blogs);
 */

/* let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Col',
    blogs: [
        { tittle: 'Hello', likes: 30},
        { tittle: 'Testing', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('The user logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.tittle, blog.likes);
        })
    }
}; 

user.logBlogs();
console.log(this); */

// -----------------------------------------------

// math objects 

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.2;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers 
const random = Math.random();
console.log(random);
console.log(Math.round(random*100));


