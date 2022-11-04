const naya:Array<number>=[1,2,3,4,]

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}


interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
// function getType(data:User | Admin):string{
//     return data.type
// }
function userinfo:User={
    type:'user',
    name:"Nandlal",
    age:19,
    occupation:"Student"
}
function admininfo:Admin={
    type:"admin",
    name:"Masai",
    age:3,
    role:"School"
}
console.log(getType(userinfo));
console.log(getType(admininfo))