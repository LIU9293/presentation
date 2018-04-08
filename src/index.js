import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Buffer = require('buffer/').Buffer;
window.Buffer = Buffer;

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
