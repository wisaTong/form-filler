import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env)

ReactDOM.render(<App />, document.getElementById('root'));
