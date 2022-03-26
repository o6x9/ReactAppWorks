import react from 'react';
import reactDOM from 'react-dom';
////////////////////////////////////////////////////////////////////////////////////// Smpile react:-
// reactDOM.render(
//     react.createElement('h1', {}, 'Hello world!'),
//     document.getElementById('root')
// );
////////////////////////////////////////////////////////////////////////////////////// child elemnt:-
// reactDOM.render(
//     react.createElement('div', {}, react.createElement('h1', {}, 'Hello world!')),
//     document.getElementById('root')
// );
/////////////////////////////////////////////////////////////////////////////////////// propse:-
// reactDOM.render(
//     react.createElement('a', { href: 'https://www.google.com' }, 'take me to Google'),
//     document.getElementById('root')
// );
/////////////////////////////////////////////////////////////////////////////////////// Multiple Child Elements:-
// reactDOM.render(

//     react.createElement('ul', {},

//         react.createElement('li', {}, 'Apples'),

//         react.createElement('li', {}, 'Oranges'),

//         react.createElement('li', {}, 'Mangos')
//     ),
//     document.getElementById('root')
// );
/////////////////////////////////////////////////////////////////////////////////////// Complex Element Nesting:-
// reactDOM.render(

//     react.createElement('ul', {},

//         react.createElement('li', {}, 'Apples', react.createElement('ul', {}, react.createElement('li', {}, '$1.00 per lb'))),

//         react.createElement('li', {}, 'Oranges', react.createElement('ul', {}, react.createElement('li', {}, '$0.77 per lb'))),

//         react.createElement('li', {}, 'Mangos', react.createElement('ul', {}, react.createElement('li', {}, '$2.00 per lb')))
//     ),
//     document.getElementById('root')
// );
//////////////////////////////////////////////////////////////////////////////////////// Using Variables:-
const applesPrice = react.createElement('li', {}, '$1.00 per lb')
const apples = react.createElement('ul', {}, applesPrice)

const orangesPrice = react.createElement('li', {}, '$0.77 per lb')
const oranges = react.createElement('ul', {}, orangesPrice)

const mangoPrice = react.createElement('li', {}, '$2.00 per lb')
const mangos = react.createElement('ul', {}, mangoPrice)
reactDOM.render(

    react.createElement('ul', {},

        react.createElement('li', {}, 'Apples', apples),

        react.createElement('li', {}, 'Oranges', oranges),

        react.createElement('li', {}, 'Mangos', mangos)
    ),
    document.getElementById('root')
);
///////////////////////////////////////////////////////////////////////////////////////// Lesson 1 Practice Hands-On:-
// const color1 = React.createElement('li', {}, 'Green');
// const color2 = React.createElement('li', {}, 'Blue');
// const color3 = React.createElement('li', {}, 'Red');

// const artist1 = React.createElement('li', {}, 'Regina Spektor');
// const artist2 = React.createElement('li', {}, 'Antonin Dvorak');
// const artist3 = React.createElement('li', {}, 'Radiohead');

// const food1 = React.createElement('li', {}, 'Pizza');
// const food2 = React.createElement('li', {}, 'Ceasar Salad');
// const food3 = React.createElement('li', {}, 'Gnocchi');

// const website1 = React.createElement(
//     'li',
//     {},
//     React.createElement('a', { href: 'https://www.google.com' }, 'www.google.com')
// );
// const website2 = React.createElement(
//     'li',
//     {},
//     React.createElement(
//         'a',
//         { href: 'https://www.facebook.com' },
//         'www.facebook.com'
//     )
// );
// const website3 = React.createElement(
//     'li',
//     {},
//     React.createElement(
//         'a',
//         { href: 'https://www.instagram.com' },
//         'www.instagram.com'
//     )
// );

// ReactDOM.render(
//     React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'My Favorite Things'),
//         React.createElement(
//             'ul',
//             {},
//             React.createElement(
//                 'li',
//                 {},
//                 'Favorite Colors',
//                 React.createElement('ol', {}, color1, color2, color3)
//             ),
//             React.createElement(
//                 'li',
//                 {},
//                 'Favorite Music',
//                 React.createElement('ol', {}, artist1, artist2, artist3)
//             ),
//             React.createElement(
//                 'li',
//                 {},
//                 'Favorite Food',
//                 React.createElement('ol', {}, food1, food2, food3)
//             ),
//             React.createElement(
//                 'li',
//                 {},
//                 'Favorite Websites',
//                 React.createElement('ol', {}, website1, website2, website3)
//             )
//         )
//     ),
//     document.getElementById('root')
// );