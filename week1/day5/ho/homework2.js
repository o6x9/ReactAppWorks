var button = document.getElementById("gid2");
button.addEventListener("click", idCard);

function idCard(){

    var firstname = document.getElementById("firstname").value;
    
    var lastname= document.getElementById("lastname").value;
    
    var address = document.getElementById("address").value;
    
    var age = document.getElementById("age").value;

    var phonenumber = document.getElementById("phonenumber").value;
    //
    var postFullName = document.getElementById("postFullName");

    var postAddress = document.getElementById("postAddress");

    var postAge = document.getElementById("postAge");

    var postPhoneNumber = document.getElementById("postPhoneNumber");
    //
    postFullName.innerHTML = firstname + " " + lastname;
    postAddress.innerHTML = " " + " " + address;
    postAge.innerHTML = "age:" + " " + age;
    postPhoneNumber.innerHTML = "PhoneNumber:" + " " + phonenumber

        }
    

