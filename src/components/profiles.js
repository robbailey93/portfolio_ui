import React, { Component } from 'react';
// import { buildUrl } from '../connections/urls';

//import axios from 'axios';
import ProfileList from './profile-list-comp';
//import TableRow from './TableRow';

class Profiles extends Component {
	render() {
		return (
			<div id='portfolio-main'>
				<section className='portfolio-about' data-section='about'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div className='col-sm-12'>
								<div
									className='row row-bottom-padded-sm'
									data-animate-effect='fadeInLeft'>
									<div className='col-sm-12'>
										<div className='about-desc'>
											<ProfileList></ProfileList>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='portfolio-about'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-9 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
									Highlights of experience, knowledge and skills
								</h2>
							</div>
						</div>
						<div className='row row-pt-md'>
							<div className='col-md-4 text-center'>
								<div className='services color-1'>
								<span className='icon'>
										{/* <i className='fa fa-desktop' aria-hidden='true'></i> */}
										<i class='fa fa-terminal fa-lg' aria-hidden='true'></i>
									</span>
									<div className='desc'>
										<h3>Software Engineering </h3>
										<p>
											I have experience with the software development process.
											Building web applications through a collaborative 
											effort by partnering with teams from Product, Design, UI/UX Development and Testing, QA and Deployment.
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-4 text-center'>
								<div className='services color-3'>
									<span className='icon'>
										{/* <i className='fa fa-desktop' aria-hidden='true'></i> */}
										<i class='fa fa-file-o fa-lg' aria-hidden='true'></i>
									</span>
									<div className='desc'>
									<h3>Web Development </h3>
										<p>
											I have experience building websites
											and web applications using HTML5,
											CSS3, SASS, JavaScript and React
										</p>
									</div>
								</div>
							</div>
							
							{/* <div className='col-md-4 text-center'>
								<div className='services color-5'>
									<span className='icon'>
										<i className='icon-data' />
									</span>
									<div className='desc'>
										<h3>Dev Ops</h3>
										<p>
											I am pursuing my internship with
											DevOps team at Juniper and working
											with tools like Jenkins, Docker, K8s
										</p>
									</div>
								</div>
							</div> */}
							{/* <div className='col-md-4 text-center'>
								<div className='services color-2'>
									<span className='icon'>
										<i className='icon-data' />
									</span>
									<div className='desc'>
										<h3>Dev Ops</h3>
										<p>Jenkins , Kubernetes , Docker </p>
									</div>
								</div>
							</div> */}
							<div className='col-md-4 text-center'>
								<div className='services color-4'>
									<span className='icon'>
										{/* <i className='fa fa-fw fa-desktop' /> */}
										<i class="fa fa-user-o fa-lg" aria-hidden="true"></i>
									</span>
									<div className='desc'>
										<h3>UI/UX Design and Testing</h3>
										<p>Understanding of design principles, guidelines and standards. Experience conducting Usability Tests.</p>
									</div>
								</div>
							</div>
							{/* <div className='col-md-4 text-center'>
								<div className='services color-6'>
									<span className='icon'>
										<i className='icon-phone3' />
									</span>
									<div className='desc'>
										
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Profiles;
