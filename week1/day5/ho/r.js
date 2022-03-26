function idCard()
{
    var firstname=document.getElementById("first-name").value;
    var lastname=document.getElementById('last-name').value;
    var age=document.getElementById('age').value
    var phone=document.getElementById('phone').value
    var address=document.getElementById('address').value
    
  //console.log(firstname)
  var fullName = document.getElementById('postFullName')
  fullName.innerHTML = firstname+"  "+lastname

  var Address = document.getElementById('postAddress')
  Address.innerHTML = address

  var numberArray=[];
  numberArray.push(age,phone);
  //console.log(numberArray)
  
  for( var i=0;i < numberArray.length;i++)
{
    //console.log(numberArray)

    if(i<=100)
    {
       // console.log(age)
        var age1 = document.getElementById('postAge')
        age1.innerHTML = age
       //  console.log(age)
    }
    else if(i>100)
    {
        var phonenumber1 = document.getElementById('postPhoneNymber')
        phonenumber1.innerHTML = "Phone Number : "+ phone
    }

}
  

}