// Assignment 1 start here 

const a:number=1
const b:string='hell'
const c:boolean=false
// var d:array=[1,2,3,4]
const d:null=null;
const e:undefined=undefined;
const f:Array<number>=[1,2,3,4]
const g:Array<number>=[1,2,3,4]
const h:number[]=[1,2,3,4]
const i:Array<string>=["hello", "world", "world"]
const j:string[]=["hello", "world", "world"]

var naam:string="Nandlal"
const age:number=21
const isFetching:boolean=false
const numbers:Array<number>=[1,2,3,4,5,5,6]
const numbers2:number[]=[1,2,4,6,7,7]

// important tuple refers to array having more than one element like string or boolean or string or number 

// or operator in typescript is | 

// it is the only possible way to create a tuple 
const tuple:Array<string|boolean>=["hello world",false]
// or
const tuple2:[string,boolean]=["hello world",false]

// Array of array 

const arrayh:Array<Array<number |string>>=[
    [0,"scssd"],[3,'rerer'],[4,'dfd']
]

// Array of object in typescript 
// Method 1 but not recommeneded to use to 
const k:Array<Object>=[
    {id: 1,name:'amit',employed:true},
    {id: 2,name:'rohit',employed:false},
    {id: 2,name:'rohit',employed:false}
]
// Method 2 is best method for using array of object 
const k2:Array<{
id: number;
name: string;
employed:boolean;
age?: number;
//? is used for optional keys in typescript
}>=[
    {id: 1,name:'amit',employed:true,age:21},
    {id: 2,name:'rohit',employed:false},
    {id: 2,name:'rohit',employed:false}
]
enum Data{
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

// Term record is used to tell the data type of key like below 

const l:Record<string,boolean>={
    loading: false,
    error:false,
    success:true,
    requestsend:false,
}

// third number is used for assigning the value or return type below

const multiply=(a:number,b:number):number=>{
return a*b
}
console.log(multiply(12,13))

const divide=(x:number,y:number):number=>{
return x/y
}
console.log(divide(100,2))

// here it is not returning anything so it will void as its datatype 
const divide2=(z:number,v:number):void=>{
    console.log(z/v) 
    }
    divide2(100,2)