import React, { Component } from 'react';
import { Layout,Divider,Input,Slider } from 'antd';
import Availability from './availability.jsx';
import SelectComp from '../commonComponents/selectComp.jsx';
import SliderComponent from './sliderComponent.jsx';

export default class LeftBlockComponent extends Component{
	render(){
		const jobtypeProps=['Full-time','Part-time','hourly'];
		const skillsProps = ["PHP","JAVA","REACT.JS","JAVASCRIPT","CSS","HTML5","ANGULAR.JS"];
		const experienceProps=['Senior Developer','Junior Developer','Team Lead','Aricitect'];
		const languageProps=['English','Spanish','France','Chinese','Korean']

		return(
			<Layout>
				<p><b>FILTERS</b> <span className='clearFilter'>Clear all filters</span></p>
				<Divider />
				<SelectComp compType="multiple" optionProps={skillsProps} title="Skills" />
				<Availability />
				<SelectComp compType="default" optionProps={jobtypeProps} title="Job type" />
				<SliderComponent />
				<div className="container">
				<SelectComp compType="default" optionProps={experienceProps} title="Experience" />
				</div>
				<div className="container">
					<p><b>Countries</b> <span className='clearFilter'>clear</span></p>
					<Input placeholder="Enter State,Province or country" />
				</div>
				<SelectComp compType="default" optionProps={languageProps} title="Languages" />

			</Layout>
		);
	}
}