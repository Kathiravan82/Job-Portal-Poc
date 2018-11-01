import React, { Component } from 'react';
import { Checkbox,Tooltip,Icon } from 'antd';

export default class Availability extends Component{
	onChange = e =>{
  		console.log(`checked = ${e.target.checked}`);
		}
	render(){
		return(
		<div className="container">
		<p><b>AVAILABILITY <Tooltip title="prompt text"><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip></b> <span className='clearFilter'>clear</span></p>
		<div><Checkbox onChange={this.onChange}>Hourly</Checkbox></div>
		<div><Checkbox onChange={this.onChange}>Part-time(20hrs/wk)</Checkbox></div>
		<div><Checkbox onChange={this.onChange}>Checkbox(40hrs/wk)</Checkbox></div>
		</div>
		);
	}
}
