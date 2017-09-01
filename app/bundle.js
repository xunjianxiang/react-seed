'use strict';

import React, { Component } from 'react';

export class Bundle extends React.Component {
  state = {
    name: null
  }

  componentWillMount () {
    let script = document.createElement('script');
    script.setAttribute('src', this.props.dependency);
    document.body.append(script);
    script.onload = () => {
      console.log('dependency loaded');
      this.load(this.props);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load () {
    console.log('chunk load');
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
