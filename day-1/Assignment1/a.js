// Assignment 1 start here 
var a = 1;
var b = 'hell';
var c = false;
// var d:array=[1,2,3,4]
var d = null;
var e = undefined;
var f = [1, 2, 3, 4];
var g = [1, 2, 3, 4];
var h = [1, 2, 3, 4];
var i = ["hello", "world", "world"];
var j = ["hello", "world", "world"];
var naam = "Nandlal";
var age = 21;
var isFetching = false;
var numbers = [1, 2, 3, 4, 5, 5, 6];
var numbers2 = [1, 2, 4, 6, 7, 7];
// important tuple refers to array having more than one element like string or boolean or string or number 
// or operator in typescript is | 
// it is the only possible way to create a tuple 
var tuple = ["hello world", false];
// or
var tuple2 = ["hello world", false];
// Array of array 
var arrayh = [
    [0, "scssd"], [3, 'rerer'], [4, 'dfd']
];
// Array of object in typescript 
// Method 1 but not recommeneded to use to 
var k = [
    { id: 1, name: 'amit', employed: true },
    { id: 2, name: 'rohit', employed: false },
    { id: 2, name: 'rohit', employed: false }
];
// Method 2 is best method for using array of object 
var k2 = [
    { id: 1, name: 'amit', employed: true, age: 21 },
    { id: 2, name: 'rohit', employed: false },
    { id: 2, name: 'rohit', employed: false }
];
var Data;
(function (Data) {
    Data[Data["User"] = 0] = "User";
    Data[Data["SuperUser"] = 1] = "SuperUser";
    Data[Data["Admin"] = 2] = "Admin";
    Data[Data["SuperAdmin"] = 3] = "SuperAdmin";
})(Data || (Data = {}));
// Term record is used to tell the data type of key like below 
var l = {
    loading: false,
    error: false,
    success: true,
    requestsend: false
};
// third number is used for assigning the value or return type below
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(12, 13));
var divide = function (x, y) {
    return x / y;
};
console.log(divide(100, 2));
// here it is not returning anything so it will void as its datatype 
var divide2 = function (z, v) {
    console.log(z / v);
};
divide2(100, 2);
