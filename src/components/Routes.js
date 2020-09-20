import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieCreate from './pages/MovieCreate';
import MovieList from './pages/MovieList';

const Routes = (props) => {
  const PrivateRoute = (xprops) => {
    if (props.isLogin) {
      return <Route {...xprops} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const GuestRoute = (xprops) => {
    if (!props.isLogin) {
      return <Route {...xprops} />;
    } else {
      return <Redirect to="/movie-editor/list" />;
    }
  };

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <GuestRoute path="/login" component={Login} />
      <GuestRoute path="/register" component={Register} />
      <PrivateRoute path="/movie-editor/list" component={MovieList} />
      <PrivateRoute path="/movie-editor/create" component={MovieCreate} />
    </Switch>
  );
};

export default Routes;
