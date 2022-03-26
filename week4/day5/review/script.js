const generatePassword = () => {
    var chars = "";
    if ($('#hasCapital').is(':checked')) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if ($('#hasSmall').is(':checked')) {
        chars += 'abcdefghijklmnopqrstuvwxyz'
    }
    if ($('#hasNumbers').is(':checked')) {
        chars += '0123456789'
    }
    if ($('#hasSpecial').is(':checked')) {
        chars += '!@#$%^&*()/<>.\{}'
    }
    if (chars.length < 12) {
        window.alert('Please check some critiria')
        return
    }
    var passwordLength = Math.min(12, chars.length);
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    $('#passwordField').val(password);

}

const checkPassword = () => {
    const passwordValue = $('#passwordField').val()
    const capitalRegEx = /[A-Z]/
    const smallRegEx = /[a-z]/
    const numberRegEx = /[0-9]/
    const characterRegEx = /[!@#$%^&*(),.?":{}|<>_+=/]+/
    if (passwordValue.match(capitalRegEx)) {
        $('#capitalRule').addClass('matched')
    } else {
        $('#capitalRule').removeClass('matched')
    }
    if (passwordValue.match(smallRegEx)) {
        $('#smallRule').addClass('matched')
    } else {
        $('#smallRule').removeClass('matched')
    }
    if (passwordValue.match(numberRegEx)) {
        $('#numbersRule').addClass('matched')
    } else {
        $('#numbersRule').removeClass('matched')
    }
    if (passwordValue.match(characterRegEx)) {
        $('#charactersRule').addClass('matched')
    } else {
        $('#charactersRule').removeClass('matched')
    }
    if (passwordValue.length > 8) {
        $('#lengthRule').addClass('matched')
    } else {
        $('#lengthRule').removeClass('matched')
    }
}