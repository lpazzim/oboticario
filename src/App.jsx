import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import User from './containers/User/User.jsx';
import Products from './containers/Products/Products.jsx';
import Sales from './containers/Sales/Sales.jsx';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = ({ user }) => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header />
      <div className="app-content">
        <Route user={user} path="/" exact component={Login} />
        <Route user={user} path="/user" exact component={User} />
        <Route user={user} path="/products" exact component={Products} />
        <Route user={user} path="/sales" exact component={Sales} />
      </div>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
