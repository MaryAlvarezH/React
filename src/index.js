import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //es el principal, se puede cambiar de nombre pero es mejor asi
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));//ReactDom es el encargado de generar el Virtual DOM
registerServiceWorker();
