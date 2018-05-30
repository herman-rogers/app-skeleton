import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppStyles from './app.style';

const App = () => (
  <AppStyles>
    <div className="page-body">
      <Route exact path="/" component={() => <Redirect to="/home" />} />
      <
    </div>
    <div className="footer">
      Footer
    </div>
  </AppStyles>
);

export default App;
