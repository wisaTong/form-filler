import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './css/App.css';
import C from './components/C'
import FormPage from './pages/FormPage'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={C} />
          <Route path="/form" component={FormPage} />
        </header>
      </div>
    </Router>
  );
}

export default App;
