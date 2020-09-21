import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieCreate from './pages/MovieCreate';
import MovieList from './pages/MovieList';
import MovieReviewDetail from './pages/MovieReviewDetail';
import MovieEdit from './pages/MovieEdit';

const Routes = (props) => {
  const PrivateRoute = (xprops) => {
    if (props.isLogin) {
      return xprops.children;
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
      <Route exact path="/movies/:id" component={MovieReviewDetail} />
      <GuestRoute path="/login" component={Login} />
      <GuestRoute path="/register" component={Register} />
      <PrivateRoute>
        <Route path="/movie-editor/list" component={()=><MovieList user={props.user} />} />
        <Route path="/movie-editor/edit/:id" component={()=><MovieEdit user={props.user} />} />
        <Route path="/movie-editor/create" component={()=><MovieCreate user={props.user} />} />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
