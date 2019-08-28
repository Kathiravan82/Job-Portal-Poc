import React, { Component } from 'react';
import { Layout,Divider,Input,Slider } from 'antd';
import Availability from './availability.jsx';
import SelectComp from '../commonComponents/selectComp.jsx';
import SliderComponent from './sliderComponent.jsx';

//import jsonData from '../data/joblist.json';




export default class LeftBlockComponent extends Component{
	constructor(props){
		super(props)
		this.clearAllinput = React.createRef();
		this.clearAllCheckbox = React.createRef();
		this.clearAllSlider = React.createRef();
		this.clearAllinputChildCall=this.clearAllinputChildCall.bind(this);
		this.filterProps=this.filterProps.bind(this);
	}
	
	clearAllinputChildCall(){
		let filterValues=this.props.filterValues;
		this.clearAllinput.current.clearAllInputMethod();
		this.clearAllCheckbox.current.handleResetCheckbox();
		this.clearAllSlider.current.handleResetSlider();
		filterValues=null
	}
	filterProps(data,property){
		let arr = [];
			data.forEach(function(element){
				if (arr.indexOf(element[property]) === -1) {
					arr.push(element[property])
				}
		    })
		arr = arr.join(',').split(',');
		arr=arr.filter((v,i) => arr.indexOf(v) === i)

		return arr;
	}
	render(){
		const jobData=this.props.jsonData
		console.log(jobData);
		const skillsProps= this.filterProps(jobData,"requiredSkills");
		const jobtypeProps =this.filterProps(jobData,"title");
		const experienceProps=['1-5 years','5-10 years','10+ years'];
		const languageProps=['English','Spanish','France','Chinese','Korean'];
		const countryProps =this.filterProps(jobData,"location");
		let filterValues=this.props.filterValues;
		
		return(
			<Layout >
				<p><b>FILTERS</b> <span className='clearFilter' onClick={this.clearAllinputChildCall}>Clear all filters</span></p>
				<Divider />
				<SelectComp compType="multiple" optionProps={skillsProps} title="Skills" handleChange={this.props.handleChange} filterValues={filterValues} ref={this.clearAllinput} />
				<Availability ref={this.clearAllCheckbox} filterValues={filterValues} handleChange={this.props.handleChange} />
				<SelectComp compType="default" optionProps={jobtypeProps} title="Job type" placeholder="Select a job type" filterValues={filterValues}  handleChange={this.props.handleChange} />
				<SliderComponent filterValues={filterValues} handleChange={this.props.handleChange} ref={this.clearAllSlider} />
				<div className="container">
				<SelectComp compType="default" optionProps={experienceProps} title="Experience" placeholder="Select your experience level"  />
				</div>
				<div className="container">
					<SelectComp compType="default" optionProps={countryProps} title="State or Province" placeholder="Select your State or Province" handleChange={this.props.handleChange} filterValues={filterValues} ref={this.clearAllinput} />
				</div>
				<SelectComp compType="default" optionProps={languageProps} title="Languages" placeholder="Select your Languages"  />

			</Layout>
		);
	}
}