import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './css/App.css';
import FormPage from './pages/FormPage'
import BookingTable from './components/BookingTable'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Route exact path="/" component={BookingTable} />
          <Route path="/form" component={FormPage} />
        </header>
      </div>
    </Router>
  );
}

export default App;
