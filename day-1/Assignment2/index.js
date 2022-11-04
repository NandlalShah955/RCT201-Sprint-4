var me = "hello";
var naya = [true, "hello"];
var num = [1, 3, 4, 5];
var k3 = [
    { id: 1, name: "amit", employed: true, age: 21 },
    { id: 1, name: "amit", employed: true },
    { id: 1, name: "amit", employed: true },
];
var info = [
    { id: 1, title: "Homework", status: false, age: 22 },
    { id: 2, title: "housework", status: true },
    { id: 3, title: "coding", status: true },
];
var data1 = {
    title: "Todos",
    status: false,
    id: 1
};
var data = "hello";
var getName = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    if (firstname && lastname) {
        return "".concat(firstname, "_").concat(lastname);
    }
    else {
        return "".concat(lastname);
    }
};
var details = {
    phone: [123456],
    addresses: ["123/", "Efg", "hij", "563122"],
    firstname: "Nandlal",
    lastname: "Shah"
};
// const PhoneBook = ({phone,addresses,email,firstname,lastname,middlename,}: PersonDetails) => {
//     return phone=[1,2,3,4,5]
//   addresses="delhjhi"
// };
