
'use strict';

import React from 'react';

let id = 0;
export class UserList extends React.Component {
  state = {
    list: []
  }
  get title () {
    return <h1>User List</h1>;
  }
  get list () {
    if (this.state.list.length) {
      return (
        <table>
          <thead>
            <tr>
              <th> 编号 </th>
              <th> 姓名 </th>
              <th> 年龄 </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map(item => {
                return (
                  <tr key={ item.id }>
                    <td> { item.id } </td>
                    <td> { item.name } </td>
                    <td> { item.age } </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )
    } else {
      return <div>No Items</div>
    }
  }

  fill () {
    let list = [];
    for (let i = 0; i < 9; i ++) {
      id ++;
      list.push({
        id,
        name: `name_${i}`,
        age: Math.ceil(Math.random() * 100)
      })
    }
    this.setState({list})
  }

  componentDidMount () {
    this.fill();
  }

  render () {
    return (
      <div>
        { this.title }
        { this.content }
        { this.list }
      </div>
    )
  }
}
