import React, { Component } from 'react'
import { Input,Row,Col } from 'antd';
import { FacebookFilled,SearchOutlined,UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export default class Header extends Component {
  render() {
      return (
          <Row type='flex' style={{backgroundColor:'#4267b2',height:'42px' ,borderBottom:'1px solid #29487d'}}>
            <Col span={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <FacebookFilled style={{fontSize:'27px' ,color: '#fff'}}/>
              <Input
                placeholder="ค้นหา"
                // onSearch={value => console.log(value)}
                style={{ width: 400 , height:25 ,marginLeft:'7px' }}
              />
              <SearchOutlined style={{backgroundColor:'#f5f6f7',fontSize:'19px',padding:'2px 8px',borderRadius:'2px',border:'1px solid #d9d9d9'}}/>
            </Col>
            <Col span={12} style={{display:'flex',alignItems:'center'}}>
              <Avatar size={25} icon={<UserOutlined />}/>
              Name
              หน้าหลัก
              สร้าง
            </Col>
          </Row>
    )
  }
} 
