'use strict';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Bundle } from './bundle';

import { Table } from './table.component';
import UserChunk from 'bundle-loader?lazy&name=user!./user'

// const LazyLoad = (chunk, name, props) => {
//   let keys = Object.keys(props);
//   return () => (
//     <Bundle load={ chunk } name={name}>
//       {Tag => <Tag/>}
//     </Bundle>
//   )
// }

// const UserLazy = () => (
//   <Bundle load={ UserChunk } name="User">
//     {User => <User title={this.props.title}/>}
//   </Bundle>
// )
const UserLazy = () => (
  <Bundle load={ UserChunk } name="User" dependency="https://unpkg.com/vue@2.4.2/dist/vue.min.js">
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
        {/* {
          routes.map((route, index) => {
            return (
              <Route path={ route.path } component={ route.component }></Route>
            )
          })
        } */}
      </div>
    )
  }
}
