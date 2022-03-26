// var color1 = 'red';
// var color2 = 'blue';
// var color3 = 'white';

// var colors = ['white', 'red', 'blue']

// var c
// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i])
//     if (colors[i] === 'red') {
//         console.log('Wow! we have a match')
//     }
// }


var years = [1992, 1999, 2003]
var years2 = [1998, 2000, 2003, 2004, 2005, 2010, 2011]
function calculateAge(yearsArray) {
    var n = 0
    var yearStorage = []
    while (n < yearsArray.length) {
        yearStorage.push(2022 - yearsArray[n])
        n++
    }
    return yearStorage
}
var yearsAges = calculateAge(years)
var years2Ages = calculateAge(years2)





function sayHi(name) {
    console.log('Hi ' + name)
}
sayHi('Feras')
sayHi('Ammar')
sayHi('Man')


var movies = [
    {
        title: 'Star Wars',
        publishYear: 2015,
        actors: [
            'Feras', 'Ammar'
        ]
    },
    {
        title: 'Spider Man',
         publishYear: 2021,
         actors: ['Abdullah', 'Tom']
    }
]

for (var x = 0; x < movies.length; x++) {
    console.log(movies[x].title)
}