'use strict';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Bundle } from './bundle';

import { Table } from './table.component';
import UserChunk from 'bundle-loader?lazy&name=user!./user'

const UserLazy = () => (
  <Bundle load={ UserChunk } name="User" dependency="https://unpkg.com/antd@2.13.0/dist/antd.min.js, https://unpkg.com/antd@2.13.0/dist/antd.min.css">
    {User => <User/>}
  </Bundle>
)


export class App extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
        <Route path='/table' component={ Table }></Route>
        <Route path='/user' component={ UserLazy }></Route>
      </div>
    )
  }
}
