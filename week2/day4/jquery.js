$(document).ready(function () {
  $("h1").click(function () {
    $(this).addClass("blue");
  });

  $("h2").click(function () {
    $(this).addClass("red");
  });

  $("h3").click(function () {
    $(this).addClass("pink");
  });

  $("div").hover(function () {
    $(this).addClass("green", "back");
  });

  $("footer").hover(function () {
    $(this).css("background", "yellow");
    $(this).toggleClass("red");
  });

  $("#o").hover(function () {
    $(this).css("background", "black");
    $(this).css("color", "brown");
  });




  $("h7").hover(function () {
    $(this).toggleClass("background");
    
  });
});
