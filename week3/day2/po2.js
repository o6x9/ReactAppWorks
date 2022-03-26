function check_form() {
  var passw = document.getElementById("password-input-0").value;
  var passw2 = document.getElementById("password-input-1").value;
  var letter = /[a-z]/;
  var letterUp = /[A-Z]/;
  var number = /[0-9]/;
  var filter = /[$&+,:;=?@#*]/;

  if (passw.length > 8) {
    var zoo = document.getElementById("test5");
    zoo.style.color = "green";
    // alert("Please make sure password is longer than 8 characters.")
  }
  if (passw.length < 8) {
    var zoo = document.getElementById("test5");
    zoo.style.color = "red";
  }
  if (passw == passw2) {
    var zoo2 = document.getElementById("test6");
    zoo2.style.color = "green";
    //  alert("Please make sure passwords match.")
  }
  if (passw != passw2) {
    var zoo2 = document.getElementById("test6");
    zoo2.style.color = "red";
  }
  if (letter.test(passw)) {
    var zoo3 = document.getElementById("test2");
    zoo3.style.color = "green";

    // alert("Please make sure Password Includes an UpperCase and LowerCase character")
  }
  if (!letter.test(passw)) {
    var zoo3 = document.getElementById("test2");
    zoo3.style.color = "red";
  }
  if (letterUp.test(passw)) {
    var zoo4 = document.getElementById("test1");
    zoo4.style.color = "green";
  }
  if (!letterUp.test(passw)) {
    var zoo4 = document.getElementById("test1");
    zoo4.style.color = "red";
  }
  if (number.test(passw)) {
    var zoo5 = document.getElementById("test4");
    zoo5.style.color = "green";
    // alert("Please make sure Password Includes a Digit")
  }
  if (!number.test(passw)) {
    var zoo5 = document.getElementById("test4");
    zoo5.style.color = "red";
  }

  if (filter.test(passw)) {
    var zoo6 = document.getElementById("test3");
    zoo6.style.color = "green";
    // alert('Please insert charecters');
  }
  if (!filter.test(passw)) {
    var zoo6 = document.getElementById("test3");
    zoo6.style.color = "red";
  }
}
