import React, { Component } from 'react';
import { List, Avatar, Icon, Select,Layout,Row,Col,Input } from 'antd';

//import jsonData from '../data/joblist.json';
const Option = Select.Option;
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
let filteredArr = [];
let skillsData=[];
export default class JobList extends Component{
	constructor(props){
		super(props);
		this.multiFilter = this.multiFilter.bind(this);
		this.salaryDiffCalculator =this.salaryDiffCalculator.bind(this);
		this.onHandleSort= this.onHandleSort.bind(this);
		// this.state={
		// 	filteredArr:jsonData
		// }
	}
	multiFilter(array, filters) {
	  	const filterKeys = Object.keys(filters);

	  // filters all elements passing the criteria
	  console.log("filters",filters)
	  console.log("filterKeys",filterKeys)
	  return array.filter((item,i) => {
	    // dynamically validate all filter criteria
	    return filterKeys.every((key) => {
	    	switch(key){
	    		case "jobType":{
		    	if(filters[key].indexOf(item[key])!= -1){
		    		console.log("if part")
		    		return item;
		    	}
		    	break;
		    	}
		    	case "requiredSkills":{
		    		if(item[key].indexOf(filters.requiredSkills[0])!= -1){
		    		console.log("case1 part")
		    		return item;
		    	}
		    	break;
		    	}
		    	default:{
		    		if(filters[key].indexOf(item[key])!= -1){
		    		console.log("default part")
		    		return item;
		    	}
		    	break;
		    	}
		    }
	    });
	  });
	}
	salaryDiffCalculator(objectArray, salarymin,salarymax) {
		 var acc = [];
  		 objectArray.forEach(element => { 
    		if(parseInt(element['salarymin']) > parseInt(salarymin) && parseInt(element['salarymax']) < parseInt(salarymax) ){	
        		acc.push(element);
    		}
  		});
  		 return acc;	
	}
	onHandleSort(value){
				const filterValues= this.props.filterValues;
				filteredArr=this.props.jsonData;
		switch(value){
			case "lowToHigh":{
				filteredArr=filteredArr.sort(function(a, b){
    						return a.salarymin-b.salarymin
							})
				this.props.sortChange(filteredArr)
				this.props.handleChange(filterValues)
				break;
			}
			case "highToLow":{
				filteredArr=filteredArr.sort(function(a, b){
    							return b.salarymin-a.salarymin
							})				
				this.props.sortChange(filteredArr)
				this.props.handleChange(filterValues)
				break;
			}
			case "relavance":{
				this.props.sortChange(filteredArr)
				this.props.handleChange(filterValues)
				break;
			}

		}

	}
	globalSearchFilter(gsArray,filterData,filterIds){
		gsArray.forEach((arrayVal) => {
			filterData.forEach(element => {
			    for (var property in element) {
		            var propertyVal = element[property].toString().toLowerCase().trim();
		            if((propertyVal.includes(arrayVal.toLowerCase().trim())) && filteredArr.length === 0){
		            	filteredArr.push(element);
		            	filterIds.push(element.id);
		            	break;
		            }else if(propertyVal.includes(arrayVal.toLowerCase().trim()) && filteredArr.length > 0 ) {
		                 for(let i=0;i<filteredArr.length;i++){
		                 	if(!filterIds.includes(element.id)){
		                 		filteredArr.push(element);
		                 		filterIds.push(element.id);
		                 		break;
		                 	}
		                }
		            }
			    }
			});
		})
	}
	render(){
		const jsonData =this.props.jsonData
		let filterIds = [];
		let salaryDiffChecker =[];
		let gstrArray = [];
		let filterValues=this.props.filterValues;
		console.log(filterValues)
		const salarymin=filterValues.salarymin;
		const salarymax=filterValues.salarymax;
		console.log(salarymin)
		console.log(salarymax)
		let filterGSValues=this.props.globalSearch;
		let filterData = jsonData;
		

		if(filterValues.salarymin != undefined || filterValues.salarymax != undefined){
			let multifilterValues = Object.assign({},filterValues);
			delete multifilterValues.salarymin;
			delete multifilterValues.salarymax;
			filterData = this.multiFilter(jsonData,multifilterValues);
			salaryDiffChecker = Object.assign([],filterData);
			 filterData=this.salaryDiffCalculator(salaryDiffChecker,salarymin,salarymax);
		}else{
			filterData = this.multiFilter(jsonData,filterValues);
		}
		if(filterGSValues.globalSearch){
		  	gstrArray=filterGSValues.globalSearch.split(",");
			filteredArr = [];
			this.globalSearchFilter(gstrArray,filterData,filterIds);
		}	
		else{
			filteredArr = [];
			filteredArr = filterData;
		}if(Object.keys(filterValues).length === 0 && filterValues.constructor === Object && gstrArray.length == 0){
			filteredArr = this.props.jsonData;
		}
		
		return(
		<div className="JobListBlock container">
		<Row>
		<Col className="sortBlock">
			<span className="resultsCounter">Results({filteredArr.length})<label>Sort By: </label></span>
			<span className="sortModule">

				<Select  onChange={this.onHandleSort} placeholder="Relavance">
					<Option value="relavance">Relavance</Option>
				    <Option value="lowToHigh">Price Low to High</Option>
				    <Option value="highToLow">Price High to Low</Option>
				</Select>
			</span>
		</Col>
		<Col>
	  	<List
	    itemLayout="vertical"
	    size="large"
	    total={filteredArr.length}
	    pagination={{
	      onChange: (page) => {
	        console.log(page);
	      },
	      pageSize: 4,
	    }}
	    dataSource={filteredArr}
	    renderItem={item => (
	      <List.Item
	        key={item.title}
	        extra={"$ "+Math.round(item.salarymin/160)+"/ hr"}
	      >
	        <List.Item.Meta
	          title={<p><a href={item.href}>{item.title} </a><span className={`jobType_${item.jobType.replace(" ","_")}`} >{item.jobType}</span></p>}
	          description={<span><Icon type="environment" style={{ color: '#52c41a' }} />{item.location}</span>}
	        />
	        {item.desciption}
		        <List 
		        itemLayout="horizontal"
		    	size="small"
		    	dataSource={item.requiredSkills.split(',')}
		    	renderItem={item => (
		    		<span className="skillsList"> {item}</span>
		    		)}
		        />
	      </List.Item>
	    )}
	   />
	   </Col>
	   </Row>
	   </div>
	  );
	}
}