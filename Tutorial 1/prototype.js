var student = function () {
    this.name = "Malik";
    this.age = 23;
    this.email = "malikgmail.com";
}


student.prototype = {
    address: "Shah Faisal Town!",
    getName:function () {
        return this.name;
    }
}


var std = new student();
console.log(std.name);
console.log(std.address);
console.log(std.getName());









