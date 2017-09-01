'use strict';

import React from 'react';

let data = [
  {
    id: 1,
    name: '张三',
    age: 18
  },
  {
    id: 2,
    name: '李四',
    age: 19
  },
  {
    id: 3,
    name: '王五',
    age: 20
  }
]

export class Table extends React.Component {

  render () {
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
            data.map(person => {
              return (
                <tr>
                  <td> { person.id } </td>
                  <td> { person.name } </td>
                  <td> { person.age } </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}
