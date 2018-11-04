import React, { Component } from 'react';
import { Layout,Divider,Input,Slider } from 'antd';
import Availability from './availability.jsx';
import SelectComp from '../commonComponents/selectComp.jsx';
import SliderComponent from './sliderComponent.jsx';

export default class LeftBlockComponent extends Component{
	constructor(props){
		super(props)
		/*this.state={
			filterValues:{}
		}*/
		this.clearAllinput = React.createRef();
		this.clearAllCheckbox = React.createRef();
		this.handleChange=this.handleChange.bind(this)
		this.clearAllinputChildCall=this.clearAllinputChildCall.bind(this)
	}
	componentDidMount(){
		//this.clearAllinput.current.clearAllInputMethod("click");
	}
	clearAllinputChildCall(){
		this.clearAllinput.current.clearAllInputMethod();
		this.clearAllCheckbox.current.handleResetCheckbox();
	}
	handleChange(value){
		//this.setState({[filterValues]:value})
		console.log("value",value);
	}
	render(){
		const jobtypeProps=['Full-time','Part-time','hourly'];
		const skillsProps = ["PHP","JAVA","REACT.JS","JAVASCRIPT","CSS","HTML5","ANGULAR.JS"];
		const experienceProps=['Senior Developer','Junior Developer','Team Lead','Aricitect'];
		const languageProps=['English','Spanish','France','Chinese','Korean']
		const filterValues={}
		return(
			<Layout >
				<p><b>FILTERS</b> <span className='clearFilter' onClick={this.clearAllinputChildCall}>Clear all filters</span></p>
				<Divider />
				<SelectComp compType="multiple" optionProps={skillsProps} title="Skills" handleChange={this.handleChange} filterValues={filterValues} ref={this.clearAllinput} />
				<Availability ref={this.clearAllCheckbox} filterValues={filterValues} handleChange={this.handleChange} />
				<SelectComp compType="default" optionProps={jobtypeProps} title="Job type" placeholder="Select a job type" handleChange={this.handleChange} />
				<SliderComponent filterValues={filterValues} handleChange={this.handleChange} />
				<div className="container">
				<SelectComp compType="default" optionProps={experienceProps} title="Experience" placeholder="Select your experience level" handleChange={this.handleChange}  />
				</div>
				<div className="container">
					<p><b>Countries</b> <span className='clearFilter'>clear</span></p>
					<Input placeholder="Enter State,Province or country" />
				</div>
				<SelectComp compType="default" optionProps={languageProps} title="Languages" placeholder="Select your Languages" handleChange={this.handleChange}  />

			</Layout>
		);
	}
}