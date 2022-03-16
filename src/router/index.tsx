/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  HomeScreen,
} from '../screens';
import { Page404, Page500 } from '../components/atoms/Page';

import { CompnentMiddlewareInterface, RouterPropsInterface } from './interface';
import { useAppSelector } from '../helpers';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    title: 'Ajaib Test',
    component: HomeScreen,
  },
  {
    path: '/404',
    exact: true,
    title: 'Page 404',
    component: Page404,
  },
  {
    path: '/500',
    exact: true,
    title: 'Page 505',
    component: Page500,
  },

];

const CompnentMiddleware:React.FC<CompnentMiddlewareInterface> = (
  {
    title,
    component,
    path,
    exact,
    type,
  },
) => {
  const authState = useAppSelector((state) => state.auth);

  // const token = Cookies.get('token');
  // const { component: NewComponent } = component;
  document.title = title;

  if (type === 'public') {
    if (authState.token) {
      return (
        <Redirect to={{ pathname: '/' }} />
      );
    }
    return (
      <Route
        path={path}
        exact={exact}
      >
        {React.createElement(component, {}, null)}
      </Route>
    );
  }
  if (!authState.token) {
    return (
      <Redirect to={{ pathname: '/' }} />
    );
  }
  return (
    <div>
      <Route
        path={path}
        exact={exact}
      >
        {React.createElement(component, {}, null)}
      </Route>
    </div>
  );
};

const Router:React.FC<RouterPropsInterface> = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      {
          publicRoutes.map((route, key) => (
            <CompnentMiddleware
              key={key}
              type="public"
              {...route}
            />
          ))
        }
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </ConnectedRouter>
);

export default Router;
