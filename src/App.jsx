import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import User from './containers/User/User.jsx';
import Products from './containers/Products/Products.jsx';
import Sales from './containers/Sales/Sales.jsx';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (  
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header key={Math.random()} />
      <div className="app-content">
        <Route path="/" exact component={Login} />
        <Route path="/user" exact component={User} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/sales" exact component={Sales} />
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
