import React, { Component } from 'react'
import {Col } from 'antd'
import LeftMenu from '../components/feed/LeftMenu'
export default class Feed extends Component {
  render() {
    return (
      <>
        <Col span={5} style={{display:'flex',justifyContent:'center'}}>
          <LeftMenu/>
        </Col>
        <Col span={8}>
          CONTENT 2
        </Col>
        <Col span={7}>
          CONTENT 3 
        </Col>
      </>
    )
  }
}
