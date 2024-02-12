var first:number=45;
var decimal: number=45.4589;
var hexadecimal: number=0x37f;


console.log(first);
console.log(decimal);
console.log(hexadecimal);

//strin
var empName:String="John"
var empDept:String="IT"

console.log(empName);

var stmt:String=empName + "works in" + empDept;

console.log(stmt);

//boolean
var b:boolean=true;
console.log(b);


//null: whose value is undefined
var num1=null;
num1=100;
console.log(num1);

//undefined: uninitialized
var num2=null;
num2=100;
console.log(num2);

//any: any type of data
var num3:any=null;
num3="Well";
console.log(num3);



function myfn(x:any, y:any){
    console.log(x+y);
}


myfn(100, 45);
myfn("Hello", "world");





