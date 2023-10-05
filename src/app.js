import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Dropdown />
        <Filter />
        <SearchBar />
      </div>
    </Router>
  );
};

export default App;
