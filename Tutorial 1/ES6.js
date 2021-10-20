class Users{
    constructor(age){
        this.name = "malik";
        this.age = age;
    }
    getName(){
         this.email = "malik@gmail.com";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
}

let userOne = new Users(23);

console.log(userOne.name);
console.log(userOne.getAge());


// logical error
// console.log(userOne.getEmail()); // undefine email because getName fun not call



// No error
console.log(userOne.getName());
console.log(userOne.getEmail()); // print email because getName fun call



// /////////////////////////////////////////////////////////////////////////////////////////////










