import React, { Component } from 'react';
import { Input } from 'antd';
const Search = Input.Search;
const filterType='globalSearch'
export default class SearchComponent extends Component{
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
	}
	handleChange(value){
		
		const filterValues=this.props.globalSearch;
		console.log(filterValues)
		filterValues[filterType]='';
		if(!value){
			delete filterValues[filterType]
		}else{
			filterValues[filterType]=value;
		}
		this.props.handleChange(filterValues);

	}
	render(){
		return(
			<Search
	          placeholder="input search text"
	          enterButton="Search"
	          size="large"
	          onSearch={this.handleChange}
	        />
	    );
	}
}