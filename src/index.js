import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.time('Hola');
ReactDOM.render(<App />, document.getElementById('root'), () => {
    console.timeEnd('Hola');
});
