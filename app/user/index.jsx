'use strict';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { UserList } from './user.list.component';
import { UserAdd } from './user.add.component';

export class User extends React.Component {
  render () {
    return (
      <Router basename="/user">
        <switch>
          <h1>{ this.props.title }</h1>
          <ul>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
          <Route path="/add" component={ UserAdd }></Route>
          <Route path="/list" component={ UserList }></Route>
        </switch>
      </Router>
    )
  }
}
