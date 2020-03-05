import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'antd'
import Header from './components/Header'
import FriendList from './components/FriendList'
import Feed from './pages/Feed'

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
          <Row style={{backgroundColor:'#e9ebee',paddingTop:'10px'}}>
            <Feed/>
            <Col span={4}>
              <FriendList/>
            </Col>
          </Row>
      </>
    )
  }
}
