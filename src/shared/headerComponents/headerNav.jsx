import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Dropdown, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const dropDownMenu = (
  <Menu >
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);
export default class HeaderNavComponent extends Component{
	render(){
		return(
		<Menu
      theme="white"
      mode="horizontal"
    	className="headerNav"
    >
        <Menu.Item key="1">HOW IT WORKS</Menu.Item>
        <Dropdown overlay={dropDownMenu}>
          <span> BROWSE <Icon type="down" /></span> 
        </Dropdown>
        <Menu.Item key="3">SEARCH</Menu.Item>
        <Dropdown overlay={dropDownMenu}>
          <span><Icon type="user" /> MY ACCOUNT <Icon type="down" /></span> 
        </Dropdown>
      </Menu>
		 
		);
	}
}