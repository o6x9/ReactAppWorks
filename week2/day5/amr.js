$(document).ready(function () {
  getpost();
});

function getpost() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    // type:"get",
  }).done(function (data) {
    for (i = 0; i < data.length; i++) {
      console.log(data.length);

      $("#posts-container").append(
        "<h2>" + data[i].title + "<h2>",
        "<p>" + data[i].body + "<p>"
      );
    }
  });

  $("#post-form").submit(function (e) {
    e.preventDefult();
    var title = $("#title").val();
    var body = $("#body").val();
    var url = $("#post-form").attr("action");
  });
  console.log(title);
  console.log(body);
  console.log(url);

  try {
    $.ajax({
      url: url,
      type: "post",
      data: {
        title: title,
        body: body,
      },
    });
  } catch (err) {
  } finally {
  }

  $.ajax({
    url: url,
    type: "post",
    data: {
      title: title,
      body: body,
    },
  });
  // $.map(date,function(post,i){
  //     console.log(post);
  //     $("#posts-container").append("<h3>"+post.title+"</h3>","<p>"+post+"</p>")
  // })
}
