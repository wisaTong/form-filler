import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './css/App.css';
import BookingTable from './components/BookingTable'
import RequestForm from './components/RequestForm'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={BookingTable} />
          <Route path="/form" component={RequestForm} />
        </header>
      </div>
    </Router>
  );
}

export default App;
