import React, { Component } from 'react';
import HeaderNavComponent from './headerNav.jsx'
import { Layout } from 'antd';
const { Header } = Layout;
export default class HeaderComponent extends Component{
	render(){
		return(
			<Header>
				<img src="images/logo-header.jpg" alt="Hubstaff Talent" className="logo" />
				<HeaderNavComponent />
			</Header>
		);
	}
}