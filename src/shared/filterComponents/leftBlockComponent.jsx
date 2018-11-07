import React, { Component } from 'react';
import { Layout,Divider,Input,Slider } from 'antd';
import Availability from './availability.jsx';
import SelectComp from '../commonComponents/selectComp.jsx';
import SliderComponent from './sliderComponent.jsx';

export default class LeftBlockComponent extends Component{
	constructor(props){
		super(props)
		this.clearAllinput = React.createRef();
		this.clearAllCheckbox = React.createRef();
		this.clearAllSlider = React.createRef();
		this.clearAllinputChildCall=this.clearAllinputChildCall.bind(this)
	}
	clearAllinputChildCall(){
		let filterValues=this.props.filterValues;
		this.clearAllinput.current.clearAllInputMethod();
		this.clearAllCheckbox.current.handleResetCheckbox();
		this.clearAllSlider.current.handleResetSlider();
		filterValues=null
		console.log("clearAllinputChildCall",filterValues)
	}
	
	render(){
		const jobtypeProps=['Full-time','Part-time','hourly'];
		const skillsProps = ["PHP","JAVA","REACT.JS","JAVASCRIPT","CSS","HTML5","ANGULAR.JS"];
		const experienceProps=['1-5 years','5-10 years','10+ years'];
		const languageProps=['English','Spanish','France','Chinese','Korean']
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
				<SelectComp compType="default" optionProps={experienceProps} title="Experience" placeholder="Select your experience level" handleChange={this.props.handleChange} filterValues={filterValues} />
				</div>
				<div className="container">
					<p><b>State or Province</b> <span className='clearFilter'>clear</span></p>
					<Input placeholder="Enter State,Province or country"  />
				</div>
				<SelectComp compType="default" optionProps={languageProps} title="Languages" placeholder="Select your Languages" handleChange={this.props.handleChange} filterValues={filterValues} />

			</Layout>
		);
	}
}