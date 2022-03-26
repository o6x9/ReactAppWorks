// function loadNews() {
//     var  responseArea = document.getElementById('response')
//     var myNews = new XMLHttpRequest()
//     myNews.open('GET', 'http://127.0.0.1:8080/data.json', true)
//     myNews.onreadystatechange = function() {
//         if (myNews.readyState < 4) {
//             responseArea.innerHTML = 'Loading ...'
//         }
//         if (myNews.readyState === 4 && myNews.status === 200) {
//             const parsedData = JSON.parse(myNews.responseText)
//             responseArea.innerHTML = ''
//             for (var i = 0; i < parsedData.data.length; i++) {
//                 responseArea.innerHTML = responseArea.innerHTML + 
//                 '<p>'+parsedData.data[i].title+'</p>'
//             }
//         }
//     }
//     myNews.send()
// }

function loadNews() {
    $.ajax({
        url: 'http://127.0.0.1:8080/data.json',
        success: function (data, textStatus, jqXHR) {
            for (var i = 0; i < data.data.length; i++) {
                $('#response').append('<p>' + data.data[i].title + '</p>')
            }
        },
        error: function (jqXHR, textStatus, e) {
            $('#response').html(e)
        }
    })
}

function loadStudentsData() {
    $('#response').load('dynamic.html')
}