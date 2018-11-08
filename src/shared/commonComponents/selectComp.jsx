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
	
	filterTypeVal(filterVal) {
		let filterType=''
		switch(filterVal){
			case "Skills":{
				filterType = "requiredSkills"
				break;
			}
			case "Job type":{
				filterType = "jobType"
				break;
			}
			case "State or Province":{
				filterType = "location"
				break;
			}
			default :{
				filterType = filterVal
			}
		}
		return filterType;
	}
	onHandleChange(value){
		const filterTypeVal=this.props.title === "Job type"?"joblist":this.props.title
		let filterType= this.filterTypeVal(filterTypeVal)

		//filterType=filterType.replace(" ","").toLowerCase();
		const filterValues=this.props.filterValues;
		if(!value){
			delete filterValues[filterType];	
		}else{
			if(Array.isArray(value)){
				filterValues[filterType]=value;
			}else{
				filterValues[filterType]=value.split(",");
			}
			if(!filterValues[filterType] || filterValues[filterType].length == 0 ){
					delete filterValues[filterType];	
			}
				this.props.handleChange(filterValues);
			
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
		const titleVal=({title} === "State or Province")?"state_province":{title}.toString().replace(' ','').toLowerCase();
		return(
		<div className={titleVal+"__container container"}>
				<p>
				<b>{title+" "}{title === "Job type"?<Tooltip title="prompt text"><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip>:""}</b>
				<span className='clearFilter' id={title} onClick={this.onHandleReset}  >clear</span>
				</p>
				{compType == "multiple"?
				<Select mode={compType} allowClear  onChange={this.onHandleChange}>
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

