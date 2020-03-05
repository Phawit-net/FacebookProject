import React, { Component } from 'react'
import { Row, Col, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';

export default class FriendList extends Component {
    render() {
        return (
            <Row style={{borderLeft:'1px solid #cccccc'}}>
                <Col style={{marginLeft:'10px'}}>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                    <Row style={{margin:'10px 0px'}}>
                        <Avatar size='default' icon={<UserOutlined />}/>    
                    </Row>
                </Col>
            </Row>
        )
    }
}
