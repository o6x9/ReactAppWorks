import react from 'react';
import reactDOM from 'react-dom';

reactDOM(

    react.createElement('div', { className='flower' }, 'hello world!'),
    document.getElementById('root')

);