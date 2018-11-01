import React, { Component } from 'react';
import { Layout,Row,Col, Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class FooterNavComponent extends Component{
	render(){
		return(
		<Row className="footerNav">
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
            	<ul>
                  <li>TALENT</li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
                  <ul>
            	<li>HUBSTAFF</li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
                  <ul>
            	<li>SUPORT</li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
            	<li><a href="#" >Link</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="socialBlock" >
            	<div>SOCIAL</div>
            	<ul><li><Icon type="twitter" theme="outlined" style={{fontSize:"18px"}} /></li>
            	<li><Icon type="facebook" theme="outlined" style={{fontSize:"18px"}} /></li>
            	<li><Icon type="instagram" theme="outlined" style={{fontSize:"18px"}} /></li></ul>
            </Col>

         </Row>
		 
		);
	}
}