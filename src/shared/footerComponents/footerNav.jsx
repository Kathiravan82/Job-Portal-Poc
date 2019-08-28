import React, { Component } from 'react';
import { Layout,Row,Col, Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class FooterNavComponent extends Component{
	render(){
		return(
		<Row className="footerNav">
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
            	<ul>
                  <li><strong>TALENT</strong></li>
            	<li><a href="#" >How it Works</a></li>
            	<li><a href="#" >Why we're free</a></li>
            	<li><a href="#" >Agencies</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
                  <ul>
            	<li><strong>HUBSTAFF</strong></li>
            	<li><a href="#" >About</a></li>
            	<li><a href="#" >Time Tracking</a></li>
            	<li><a href="#" >Developer</a></li>
            	<li><a href="#" >Resources</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}  >
                  <ul>
            	<li><strong>SUPPORT</strong></li>
            	<li><a href="#" >Help center</a></li>
            	<li><a href="#" >Blog</a></li>
            	<li><a href="#" >FAQ</a></li>
            	<li><a href="#" >Email us</a></li>
            	<li><a href="#" >Terms</a></li>
            	<li><a href="#" >Privacy</a></li>
                  </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="socialBlock" >
            	
            	<ul>
                        <li><strong>SOCIAL</strong></li>
                        <li >
                              <ul>
                                    <li className="iconsList"><Icon type="twitter" theme="outlined" style={{fontSize:"18px"}} /></li>
                        	      <li className="iconsList"><Icon type="facebook" theme="outlined" style={{fontSize:"18px"}} /></li>
                        	      <li className="iconsList"><Icon type="instagram" theme="outlined" style={{fontSize:"18px"}} /></li>
                              </ul>
                        </li>
                  </ul>
            </Col>

         </Row>
		 
		);
	}
}