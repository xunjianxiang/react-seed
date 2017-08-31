'use strict';

import React from 'react';
import { Item } from './item.component'

let id = 0;
export class AppComponent extends React.Component {
  state = {
    list: [],
    name: ''
  }
  get title () {
    return <h1>{ this.props.title }!</h1>;
  }
  get content () {
    return (
      <div>
        <input type="text" placeholder="please input the name" value={ this.state.name } onChange={ this.name.bind(this) }/>
        <button onClick={ this.add.bind(this, this.state.name) }>Add</button>
        <br/>
        List Length: { this.state.list.length }
        <br/>
        <button onClick={ this.reverse.bind(this) }>Reverse</button>
      </div>
    )
  }
  get list () {
    if (this.state.list.length) {
      return (
        <ul>
          {
            this.state.list.map(item => <li key={ item.id }> { item.name }</li>)
          }
        </ul>
      )
    } else {
      return <div>No Items</div>
    }
  }

  name (event) {
    this.setState({name: event.target.value})
  }

  add (name) {
    this.setState(state => {
      id ++;
      state.list.push({
        id,
        name
      });
      return { list: state.list }
    })
    this.setState({ name: '' })
  }

  remove (name) {
    this.setState(state => {
      let index = state.list.findIndex(item => item.name === name);
      state.list.splice(index, 1);
      return { list: state.list }
    })
  }

  reverse () {
    this.setState(state => {
      state.list.reverse();
      return { list: state.list }
    })
  }

  fill () {
    let list = [];
    for (let i = 0; i < 999; i ++) {
      id ++;
      list.push({
        id,
        name: `name_${i}`
      })
    }
    console.log(list)
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
