import React, { Component } from 'react';
import { Select,Tooltip,Icon } from 'antd';


const Option = Select.Option;

export default class SelectComp extends Component{
	handleChange = value =>{
  		console.log(`selected ${value}`);
	}
	renderOptions= (optionVal)=> {
	    return optionVal.map(index => (
	      <Option value={index}>{index}</Option>
	    ));
  	}
	renderSelectModal=(mode,optionVal)=>{
		return(
			<Select mode={mode} placeholder="Please select"  onChange={this.handleChange}>
		      	{this.renderOptions(optionVal)}
		    </Select>
	    )
	}
	render(){
		const {compType,title,optionProps}=this.props;
		
		//const toolTip = {}
		return(
		<div className="container">
			<p>
				<b>{title+" "}{title === "Job type"?<Tooltip title="prompt text"><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip>:""}</b>
				<span className='clearFilter'>clear</span>
			</p>
			{this.renderSelectModal(compType,optionProps)}
			
  		</div>
		);
	}
}

