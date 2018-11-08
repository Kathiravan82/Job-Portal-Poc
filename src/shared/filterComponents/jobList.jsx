import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import jsonData from '../data/joblist.json';


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
		this.salaryDiffCalculator =this.salaryDiffCalculator.bind(this);

	}
	multiFilter(array, filters) {
	  	const filterKeys = Object.keys(filters);
	  // filters all elements passing the criteria
	  console.log(filterKeys)
	  return array.filter((item) => {
	    // dynamically validate all filter criteria
	    return filterKeys.every(key => {
	    	console.log("filters---",filters[key]);
	    	console.log("item---",item[key]);
	    	return !!~item[key].indexOf(filters[key])
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
	render(){
		let filteredArr = [];
		let filterIds = [];
		let salaryDiffChecker =[];
		let filterValues=this.props.filterValues;
		const salarymin=filterValues.salarymin;
		const salarymax=filterValues.salarymax;
		console.log(filterValues.salarymin);
		console.log(filterValues.salarymax);
		let filterGSValues=this.props.globalSearch;
		console.log("filterValues",filterValues)
		let filterData = jsonData;
		

		if(filterValues.salarymin != undefined || filterValues.salarymax != undefined){
			console.log("in")
			let multifilterValues = Object.assign({},filterValues);
			delete multifilterValues.salarymin;
			delete multifilterValues.salarymax;
			filterData = this.multiFilter(jsonData,multifilterValues);
			
				//if (filterData.length == 0){
				//	salaryDiffChecker = Object.assign([],jsonData)
				//}else{
					salaryDiffChecker = Object.assign([],filterData);
				//}
				console.log("filterData",salaryDiffChecker);
			 filterData=this.salaryDiffCalculator(salaryDiffChecker,salarymin,salarymax);
		}else{
			console.log("filterValues-Else",filterValues)
			filterData = this.multiFilter(jsonData,filterValues);
			console.log("filterData-Else",filterData)
		}
		// if(filterData.length == 0){
		// 	filterData = jsonData;
		// }
		console.log("filterData---1111",filterData);
		let gstr = "React,California"
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
				            var propertyVal = element[property].toString().toLowerCase().trim();
				            
				            //console.log("includesCheck",propertyVal.includes(arrayVal.toLowerCase())
				            if((propertyVal.includes(arrayVal.toLowerCase().trim())) && filteredArr.length === 0){
				            	//console.log("---elseif---"+element.id+"value--"+element[property])
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
			        	//})
			       // }
			    }
			});
		})
		}else{
			filteredArr = [];
			filteredArr = filterData;
		}
		if(filterValues == {} && gstrArray.length == 0){
			filteredArr = jsonData;
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
	          description={item.desciption}
	        />
	        {item.description}
	      </List.Item>
	    )}
	  />
	  );
	}
}