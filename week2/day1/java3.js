function j()
{
var age="19"

var name="abdullah"

var address="m123"
console.log(address);
}

let Name ="abdullah"
var age = "19"
console.log(Name);
console.log(age);

//////////////////////////////////////////////////////////////////////////////////////

function o(){

const age2="20"

const name2="omar"

const address2="s123"

}
if(true){

let age2="20"

var name2="omar"

let address2="s123"

console.log(name2);

console.log(age2);

console.log(address2);
}






//////////////////////////////////////////////////
//function f(){


//const bobo="12345678"

//}
//console.log(bobo)






//var tam
//console.log(tam)
//////////////////////////////////////////////////
var obj= {
 "name": "abdullah",
 car: null,

}

console.log(obj.car)



console.log(obj.any)
////////////////////////////////////////////////////////


console.log("globaleobj",this)
/////////////////////////////////////////

var pearson={

firstName:'aboood',
lastName:'aliiiii',
getFullName:function(){
    console.log(this)
    console.log(this.fistName +""+this.lastName);
}




};
console.log(this.firstName);
pearson.getFullName();