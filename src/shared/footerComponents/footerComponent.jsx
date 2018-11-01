import React, { Component } from 'react';
import FooterNavComponent from './footerNav.jsx'
import { Layout,Row,Col } from 'antd';
const {Footer } = Layout;
export default class FooterComponent extends Component{
	render(){
		return(
			<Footer>
			<Row>
            <Col xs={24} sm={24} md={4} lg={6} xl={6}  ><img src="images/logo-footer.jpg" alt="Hubstaff Talent" className="logo" />
</Col>
            <Col xs={24} sm={24} md={20} lg={18} xl={18}  >
            <FooterNavComponent />
            </Col>

         	</Row>
			</Footer>
		);
	}
}