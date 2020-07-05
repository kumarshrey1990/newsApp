import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './shared/components/Header';
import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <main>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
      </main>
    </Router>
  );
}

export default App;
