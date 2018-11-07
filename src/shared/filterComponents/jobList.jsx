import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import jsonData from '../data/joblist.json';
console.log(jsonData);


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class JobList extends Component{
	constructor(props){
		super(props);
		this.multiFilter = this.multiFilter.bind(this);

	}
	multiFilter(array, filters) {
	  	const filterKeys = Object.keys(filters);
	  // filters all elements passing the criteria
	  return array.filter((item) => {
	    // dynamically validate all filter criteria
	    return filterKeys.every(key => !!~filters[key].indexOf(item[key]));
	  });
	}
	render(){
		let obj1 = {
			jobType : ["Full Time"],
			location : ["California"]
		}
		let filteredArr = [];
		let filterIds = [];
		let filterValues=this.props.filterValues;
		let filterGSValues=this.props.globalSearch;

		
		let filterData = this.multiFilter(jsonData,filterValues);
		if(filterData.length == 0){
			filterData = jsonData;
		}
		//console.log("filterData",filterData);
		let gstr = "React,California"
		console.log(filterGSValues);
		let gstrArray = [];
		if(filterGSValues.globalSearch){
		  gstrArray=filterGSValues.globalSearch.split(",");
		}
		
		
		//let res=[]
		//for (let i=0;i<gstrArray.length;i++){
		 //const res = filterData.filter(obj => Object.values(obj).some(val => val.includes("React")));
		//}
		if(gstrArray.length > 0){
			gstrArray.forEach((arrayVal) => {
			filterData.forEach(element => {
			    for (var property in element) {
				            var propertyVal = element[property].toString().toLowerCase();
				            
				            //console.log("includesCheck",propertyVal.includes(arrayVal.toLowerCase())
				            if((propertyVal.includes(arrayVal.toLowerCase())) && filteredArr.length === 0){
				            	//console.log("---elseif---"+element.id+"value--"+element[property])
				            	filteredArr.push(element);
				            	filterIds.push(element.id);
				            	break;
				            }else if(propertyVal.includes(arrayVal.toLowerCase()) && filteredArr.length > 0 ) {
				            	
				                 for(let i=0;i<filteredArr.length;i++){
				                 	if(!filterIds.includes(element.id)){
				                 		filteredArr.push(element);
				                 		filterIds.push(element.id);
				                 		break;
				                 	}
				                }
				            }
			        	//})
			       // }
			    }
			});
		})
		}else{
			filteredArr = [];
			filteredArr = filterData;
		}
		

		
		console.log("filteredArr",filteredArr);
		//let jsonData = jsonData.filter()
		return(
	  <List
	    itemLayout="vertical"
	    size="large"
	    pagination={{
	      onChange: (page) => {
	        console.log(page);
	      },
	      pageSize: 3,
	    }}
	    dataSource={filteredArr}
	    renderItem={item => (
	      <List.Item
	        key={item.title}
	        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
	        extra='$44/hour'
	      >
	        <List.Item.Meta
	          title={<a href={item.href}>{item.title}</a>}
	          description={item.description}
	        />
	        {item.content}
	      </List.Item>
	    )}
	  />
	  );
	}
}