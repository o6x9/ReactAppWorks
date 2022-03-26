function iDcard() {
    var firstNameValue = document.getElementById("fname").value;
    document.getElementById("cfname").innerHTML = firstNameValue;

    var lastNameValue = document.getElementById("lname").value;
    document.getElementById("clname").innerHTML = lastNameValue;

    var ageNameValue = document.getElementById("age").value;
   document.getElementById("cage").innerHTML = ageNameValue;

    var phonValue = document.getElementById("phnumber").value;
   document.getElementById("cphnumber").innerHTML = phonValue;

    var addressValue = document.getElementById("address").value;
    document.getElementById("caddress").innerHTML = addressValue; 
    
    



    //var numberArray=[];
    //numberArray.push(cage,cphnumber);
    //console.log(numberArray)
    
   // for( var i=0;i < numberArray.length;i++)
 // {
      //console.log(numberArray)
  
     // if(i<=100)
     // {
        // console.log(cage)
        //  var age1 = document.getElementById('postCage')
         // age1.innerHTML = cage
        // console.log(cage)
     // }
      //else if(i>100)
     // {
          //var phonenumber1 = document.getElementById('postCphnumber')
         // phonenumber1.innerHTML = "cphnumber : "+ cphnumber
     // }
  
 // }
    
}