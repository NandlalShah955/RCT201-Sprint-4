var naya = [1, 2, 3, 4,];
function getType(data) {
    return data.type;
}
var userinfo = {
    type: 'user',
    name: "Nandlal",
    age: 19,
    occupation: "Student"
};
var admininfo = {
    type: "admin",
    name: "Masai",
    age: 3,
    role: "School"
};
console.log(getType(userinfo));
console.log(getType(admininfo));
