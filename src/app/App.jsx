import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from '../home/HomePage';
import AppStyles from './app.style';

const App = () => (
  <AppStyles>
    <div className="page-body">
      <Route exact path="/" component={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomePage} />
    </div>
    <div className="footer">
      Footer
    </div>
  </AppStyles>
);

export default App;
