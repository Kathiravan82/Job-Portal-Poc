import React from 'react';
import { Layout,Divider,Input,Button,Icon } from 'antd';

const rightBlockComponent = () => {
	return(
		<Layout>
			<div className='rightAdBlockOne'>
				<img src="images/track-time-logo.jpg" alt="Hubstaff Talent" className="logo" />
				<h2>Track time on Hubstaff</h2>
				<Button type="primary" >Sign Up</Button>
				<a href="#" >Learn More </a>
			</div>
			<div className='rightAdBlockList'>
				<p><b>TOP JOBS</b> </p>
				<Divider />
				<div className="job-container">
				<div className="tobJobList">
					<div>
						<div className="left">
							<div className="title">Reactjs FrontEnd Engineer</div>
							<p className="info">Full time role for front end development. should be able to develop cross browser application</p>
						</div>
						<div className="right">$2500</div>
					</div>
					<div>
						<div className="left">
							<div className="title">Senior Ruby on Rails Engineer</div>
							<p className="info">Full time role for front end development. should be able to develop cross browser application</p>
						</div>
						<div className="right">$2500</div>
					</div>
					</div>
				</div>
			</div>
			<div className='rightAdBlockList'>
				<p><b>MOST VIEWED THIS WEEK</b> </p>
				<Divider />
				<div class="job-container">
					<div className="viewedList">
						<div>
						<div className="left">
							<div className="title">Senior Product Engineer</div>
							<p className="info">Full time role for front end development. should be able to develop cross browser application</p>
						</div>
						<div className="right">$4500</div>
						</div>
						<div>
						<div className="left">
							<div className="title">Senior Ruby on Rails Engineer</div>
							<p className="info">Full time role for front end development. should be able to develop cross browser application</p>
						</div>
						<div className="right">$3500</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default rightBlockComponent;