//////////////////////////////////////////المقارنة بالأرقام
var n1 = 45
var n2 = 90
//لأجل معرفة القيمة
console.log(`n1: ${n1} and n2: ${n2}`)
//لأجل معرفة الفرق 
console.log(n1==n2)
console.log(n1===n2)//To compare  both of value and type
console.log(n1>n2)
console.log(n1<n2)
console.log(n1>=n2)
console.log(n1<=n2)
//لأجل معرفة النوع
console.log(typeof n1)
console.log(typeof n2)
//لأجل 
console.log(n1!=n2)
console.log(n1 > n2 && n1 % 2 == 0)
//////////////////////////////////////////المقارنة بالحروف
var n3 = `Abdullah`
var n4 = `Omar`
//
console.log(`n1: ${n3} and n2: ${n4}`)
//
console.log(n3==n4) //
console.log(n3===n4) //date type & Value
console.log(n3>n4) //greter then
console.log(n3<n4) //smaller then
console.log(n3>=n4)//
console.log(n3<=n4)
//
console.log(typeof n3)
console.log(typeof n4)
//////////////////////////////////////////
const time = 14
console.log(``)
let greeting
if (time > 12)
{greeting = `Good after noon`}

else  {greeting = `Good morning`}
console.log(`Greeting `+greeting)
//لأجل فحص اكثر من شرط ان تحقق واحد من الشروط تشتغل
if (n1 < n2 || n1 % 2 == 0) 
console.log(`valid number`)
///////////////////////////////
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
////////////////////////////////

var i = 5
i += 10
console.log(i)

//////////////////////////

for ( var x = 0; x < 10; ++x){

    console.log(x)
}
////////////////////////////لا تفتح سوف يعلق الجهاز بسبب العملية المنفذة
//for ( var x = 0; x < 10; x*=1){

    //console.log(x)
//}
////////////////////////////

var z = 5
var i = z++ +2

console.log(z,``,i)
////////////////////////////////

const array1 = [`a`,`b`,`c`]
const array2 = [`d`,`e`,`f`]
const array3 = [...array1,...array2]
console.log(array3)
console.log(typeof array3[0])
console.log(typeof array3[4])
console.log(typeof array3)
console.log("d:",array3[1][0])
////////////////////////////////

const basicDate = {
surname: `OMAR`
}
const extraDate = {
    name: `ABDULLAH`
}
const fullDate = {
...basicDate,...extraDate
}
console.log(fullDate)
////////////////////////////////
const fullDate2 = {...array1,...array2,...array3
}
console.log(fullDate2)
console.log(fullDate2[`0`])
console.log(fullDate2)
/////////////////////////////////

const person = {

name: `ali`,
lastname:`mohamed`,
jobs:[`Manegr`,`Teachr`],
getFullName: function(){
    return `${this.name}${this.lastname}`
}
}
////////////////////////////////
function nameOfTheFunction(){}
const addTowNumbers = (x,y) =>{} 
/////////////////////////////////////////

// const checkUserNumber =()=>{

// var enteredNumber = document.getElementById()
// var enteredNumber = document.getElementById()
// switch(enteredNumber){
// case `1` :

//             console.log(`perfect`)
//             break;
// case `2`:
//              console.log(`amazing`)
//              break;
// case `3`:        
//             console.log(`bravo`)  
//             break;

// default:
//     console.log(`Non valid value`)
// }
// if(enteredNumber ==`1`)
// }




