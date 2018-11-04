import React, { Component } from 'react';
import { Checkbox,Tooltip,Icon } from 'antd';
const filterType= 'availability';
export default class Availability extends Component{
	constructor(props){
		super(props);
		this.state = {
    		checkedItems: new Map(),
  		};
  		this.clearAllCheckbox = React.createRef();
  		this.handleOnChange=this.handleOnChange.bind(this)
  		this.handleResetCheckbox=this.handleResetCheckbox.bind(this)
	}
	handleOnChange(e) {
    	const item = e.target.name;
    	const isChecked = e.target.checked;
    	const filterValues=this.props.filterValues;
    	if(!filterValues[filterType] || filterValues[filterType].length == 0){
    		filterValues[filterType]=[];
    	}
    	this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
		if(!item  || item.length == 0){
			delete filterValues.filterType;	
		}else {
				filterValues[filterType].push(item)
				this.props.handleChange(filterValues)
		}
  	}
	handleResetCheckbox(){
		const elements = document.querySelectorAll('.ant-checkbox-checked input');
		for (let i=0;i<elements.length;i++){
			elements[i].parentElement.setAttribute("class","ant-checkbox");
			const elemName=elements[i].getAttribute('name');
			this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(elemName, false) }));

		}
	}
	render(){
		console.log(this.state.checkedItems.get('hourly'))
		return(
		<div className="container">
		<p><b>AVAILABILITY <Tooltip title="prompt text"><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip></b> 
		<span className='clearFilter' onClick={this.handleResetCheckbox}>clear</span></p>
		<div><Checkbox name="hourly" className='availability_box' checked={this.state.checkedItems.get("hourly")} onChange={this.handleOnChange}>Hourly</Checkbox></div>
		<div><Checkbox name="parttime" className='availability_box' checked={this.state.checkedItems.get("parttime")} onChange={this.handleOnChange}>Part-Time(20hrs/wk)</Checkbox></div>
		<div><Checkbox name="fulltime" className='availability_box' checked={this.state.checkedItems.get("fulltime")} onChange={this.handleOnChange}>Full-Time(40hrs/wk)</Checkbox></div>
		</div>
		);
	}
}
