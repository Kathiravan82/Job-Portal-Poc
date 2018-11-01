import React, { Component } from 'react';
import HeaderComponent from './shared/headerComponents/headerComponent.jsx'
import LeftBlockComponent from './shared/filterComponents/leftBlockComponent.jsx'
import RightBlockComponent from './shared/filterComponents/rightBlockComponent.jsx'
import FooterComponent from './shared/footerComponents/footerComponent.jsx'


import './App.css';
import { Layout,Row,Col } from 'antd';
const { Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
      <HeaderComponent />
      <Layout className='mainContainer'>
         <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='leftContainer' ><LeftBlockComponent /></Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='middleContainer' >MiddleContainer</Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='rightContainer' ><RightBlockComponent /></Col>

         </Row>
      </Layout>
      <FooterComponent/>
    </Layout>
    );
  }
}

export default App