
// Intro jQuery

// As stated above, jQuery is a JavaScript library that 
// simplifies multi-line, complicated tasks. jQuery can be 
// used in many different ways:

// - HTML/DOM manipulation
// - CSS manipulation
// - HTML event methods
// - Effects and animations
// - AJAX

// two ways to start writing jQuery:
// 1) use the jQuery CDN
// 2) Download the jQuery project js file to your Project

// you can start to access jQuery functions with the "$" identifier

// jQuery Syntax
// Now that you know how to include jQuery in your application, 
// start by breaking down the parts of jQuery. Consider the following code:

// $("p").hide();
// You can break up the above code into three parts: The $ is the 
// selector, which selects an HTML element ("p"), and the action you 
// are going to perform on the selected HTML element .hide().

// $ is a wrapper declaring that you are using and accessing jQuery. 
// You can compare this to using var when declaring a variable.
// The selector is the HTML element you are querying or targeting, 
// and in this case, you are targeting all <p> tags. This syntax of 
// targeting an element is jQuery's way of using DOM (Document Object 
// Model), and in the past, you have used document.getElementsByTagName("p").
// The action is what you are going to do to the HTML element you have 
// targeted. .hide() will hide all paragraph elements.
// When targeting elements, you don't have to use only tags. 
// You can also target by using a class or id specific to that tag. 
// You would use this if you wanted to focus on only one p tag with 
// a specific class or id rather than targeting all p tags. The syntax 
// of targeting classes and ids is the same as when you use a CSS file: 
// to target a class, use a period . and to target an id, use a 
// hashtag #. The below code focuses on an element that has a 
// class of amazing and uses the same .hide() method:

// $(".amazing").hide();
// Document Ready Event
// The next important piece to be sure that you include is the 
// Document Ready Event, this prevents jQuery from running before 
// the document is done loading. Below, you are using the 
// $("p").hide(); that was explained earlier:

// $(document).ready(function(){
//     $("p").hide();
// });
// All jQuery methods must be within the Document Ready Event 
// for them to properly work, so make sure you include 
// $(document).ready(function(){ whenever you are using jQuery.

/* 
  Actions
  Now that you have an idea of the basic structure of jQuery, 
  look into more actions you can use when targeting HTML elements. 
  A Mouse Event will occur depending on where your cursor is on the 
  page or what it is doing (i.e., clicking, hovering, etc.). 
  In the next example, you are going to use the Mouse Event 
  .click() method in jQuery:


*/

$(document).ready(function(){

})

$(document).ready(function() {
  $("h3").click(function() {
    $(this).addClass("blue");
  }),
  $("h1").click(function() {
    $(this).addClass("blue");
  }),
  $("#description").hover(function() {
    $(this).css("background-color", "yellow");
    $(this).css("color", "blue");
  }, function() {
    $(this).css("background-color", "white");
    $(this).css("color", "black");
  })
  $("p").click(function() {
    $(this).hide();
  })
  $("p").html("hiiii")
});


// writing the above jQuery logic but with Vanilla Js:

// let pTags = document.querySelectorAll("p");
// let h3Tags = document.querySelectorAll("h3");

// pTags.forEach((p) => {
//   p.addEventListener("click", ()=> {
//     p.style.display="none";
//   })  
// })

// h3Tags.forEach((h) => {
//   h.addEventListener("click", ()=> {
//     h.classList.add("blue")
//   })  
// })

