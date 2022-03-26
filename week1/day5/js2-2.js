function changePColor() {
    var colorField = document.getElementById('color-field')
    var myParagraph = document.getElementById('myparagraph')
    myParagraph.style.color = colorField.value
}
function disablePicker() {
    var colorField = document.getElementById('color-field')
    colorField.style.display = 'none'
}
function moveForm() {
    var myForm = document.getElementById('myform')
    var currentMargin = myForm.style.marginLeft
    if (currentMargin === '') {
        currentMargin = 0
    }
    console.log(parseInt(currentMargin))
    myForm.style.marginLeft = parseInt(currentMargin) + 20 + 'px'
}