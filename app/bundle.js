'use strict';

import React, { Component } from 'react';
import { lazyload } from './lazyload';

export class Bundle extends React.Component {
  state = {
    name: null
  }

  componentWillMount () {
    let dependencies = this.props.dependency ? this.props.dependency.split(',') : [];
    lazyload(dependencies).then(result => this.load())
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load () {
    this.setState({
      name: null
    })

    this.props.load((name => {
      this.setState({
        name: this.props.name ? name[this.props.name] : name.default
      })
    }))
  }

  render () {
    return this.state.name ? this.props.children(this.state.name) : null;
  }

}
