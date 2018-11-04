import React, { Component } from 'react';
import { Select,Tooltip,Icon } from 'antd';

const Option = Select.Option;

export default class SelectComp extends Component{
	constructor(props){
		super(props);
		this.clearAllinput = React.createRef();
		this.onHandleChange=this.onHandleChange.bind(this);
		//this.onHandleReset=this.onHandleReset.bind(this);
		this.clearAllInputMethod=this.clearAllInputMethod.bind(this)
	}
	clearAllInputMethod(e){
		//console.log("clearAllInputMethod",document.querySelectorAll('.ant-select-allow-clear').length);
		var clearAll=document.querySelectorAll('.ant-select-selection__clear');
		for(let i=0;i<clearAll.length;i++){
			clearAll[i].click()
			
		}
	}
	onHandleChange(value){
		const filterType= this.props.title;
		const filterValues=this.props.filterValues;
		if(!value  || value.length == 0){
			delete filterValues[filterType];	
		}else{
			filterValues[filterType]=value;
			if(filterValues[filterType].length > 0){
			this.props.handleChange(filterValues);
			}
		}
	}
	renderOptions= (optionVal)=> {
	    return optionVal.map(index => (
	      <Option value={index}>{index}</Option>
	    ));
  	}
  	onHandleReset(e){
  		const id= e.target.id.replace(' ','').toLowerCase();
  		const clearComponent ="."+id+"__container";
  		const elem=document.querySelectorAll(clearComponent+' .ant-select-selection__clear')
  		elem[0].click();
  	}
	render(){

		const {compType,title,optionProps,placeholder}=this.props;
		//const toolTip = {}
		return(
		<div className={(title.replace(' ','').toLowerCase())+"__container container"}>
				<p>
				<b>{title+" "}{title === "Job type"?<Tooltip title="prompt text"><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip>:""}</b>
				<span className='clearFilter' id={title} onClick={this.onHandleReset}  >clear</span>
				</p>
				{compType == "multiple"?
				<Select mode={compType} allowClear  defaultValue={[optionProps[0], optionProps[1]]} onChange={this.onHandleChange}>
		      	{this.renderOptions(optionProps)}
		    	</Select>
		    	:
			    <Select mode={compType}  allowClear placeholder={placeholder}  onChange={this.onHandleChange}>
			      	{this.renderOptions(optionProps)}
			    </Select>
		}
						
  		</div>
		);
	}
}

