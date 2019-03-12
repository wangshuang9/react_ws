import React, { Component } from 'react'
import RouterMap from './map'
import Routers from './router'

export default class index extends Component {
  render() {
    const Routes =this.props.routes?this.props.routes:Routers;
    return <RouterMap Router={Routes}></RouterMap>
  }
}
