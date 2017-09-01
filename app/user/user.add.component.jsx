'use strict';

import React from 'react';

export class UserAdd extends React.Component {
  state = {
    name: '',
    age: ''
  }
  get title () {
    return <h2>User Add</h2>;
  }
  get content () {
    return (
      <div>
        <input type="text" placeholder="please input the name" value={ this.state.name } onChange={ this.name.bind(this) }/>
        <br/>
        <input type="number" placeholder="please input the age" value={ this.state.age } onChange={ this.age.bind(this) }/>
      </div>
    )
  }

  name (event) {
    this.setState( { name: event.target.value } )
  }

  age (event) {
    this.setState( { age: +event.target.value } )
  }

  render () {
    return (
      <div>
        { this.title }
        { this.content }
      </div>
    )
  }
}
