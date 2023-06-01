// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatComponent from './ChatComponent';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={ChatComponent} />
      </div>
    </Router>
  );
}

export default App;
