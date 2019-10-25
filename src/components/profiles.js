import React, { Component } from 'react';
// import { buildUrl } from '../connections/urls';
// import { isUserWhitespacable } from '@babel/types';

//import ProfileInput from './admin-inputs/profile-input';

//import ProfileForm from './sub-profiles';

import { Jumbotron } from 'reactstrap';

class Profiles extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: null,
	// 	};
	// }

	// componentDidMount() {
	// 	fetch('http://localhost:8080/routes/profiles.js')
	// 		.then(response => response.json())
	// 		.then(data => this.setState({ data }));
	// }

	render() {
		return (
			<div>
				<section className='colorlib-about' data-section='about'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div className='col-sm-12'>
								<div
									className='row row-bottom-padded-sm animate-box'
									data-animate-effect='fadeInLeft'>
									<div className='col-sm-12'>
										<Jumbotron>
											<h2>
												Testing Bootstrap Components
											</h2>
										</Jumbotron>

										<div className='about-desc'>
											<span className='heading-meta'></span>
											<h2 className='colorlib-heading'>
												About Me
											</h2>

											<p>
												Front End Developer with over 4
												years of experience actively
												collaborating with development
												teams to produce and modernize
												world-class, enterprise-quality
												web applications, web portals
												and web sites. I am a proponent
												of user-centered design as an
												integral part of application
												development, especially with how
												that translates to implementing
												Mobile Responsive solutions that
												are usable and possible to
												implement.
											</p>
											<p>
												I have experience collaborating
												across teams (Product, Design,
												QA, Marketing, and Engineering)
												to define, design and test
												applications and solutions as a
												part of the agile development
												process. I am experienced in
												leveraging user stories and
												designs to build and maintain
												viable products and applications
												via code remediation, bug fixes,
												and continual improvement.
											</p>
											<p>
												I am accustomed to working in a
												continuous delivery / continuous
												integration environment;
												leveraging pipelines and
												automated tests for optimal
												deployment.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='colorlib-about'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
								data-animate-effect='fadeInLeft'>
								<span className='heading-meta'>What I do?</span>
								<h2 className='colorlib-heading'>
									Here are some of my expertise
								</h2>
							</div>
						</div>
						<div className='row row-pt-md'>
							<div className='col-md-4 text-center animate-box'>
								<div className='services color-1'>
									<span className='icon'>
										<i className='icon-bulb' />
									</span>
									<div className='desc'>
										<h3>Web Development </h3>
										<p>
											I have experience building websites
											and chrome extentions using
											JavaScript,React,HTML,CSS
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-4 text-center animate-box'>
								<div className='services color-3'>
									<span className='icon'>
										<i className='icon-phone3' />
									</span>
									<div className='desc'>
										<h3>
											Data Structures &amp; Algorithms
										</h3>
										<p>
											As coming from the CS background, I
											have good grasp over fundamental
											concepts of DSA
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-4 text-center animate-box'>
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
							</div>
							<div className='col-md-4 text-center animate-box'>
								<div className='services color-2'>
									<span className='icon'>
										<i className='icon-data' />
									</span>
									<div className='desc'>
										<h3>Dev Ops</h3>
										<p>Jenkins , Kubernetes , Docker </p>
									</div>
								</div>
							</div>
							<div className='col-md-4 text-center animate-box'>
								<div className='services color-4'>
									<span className='icon'>
										<i className='icon-layers2' />
									</span>
									<div className='desc'>
										<h3>Graphic Design</h3>
										<p>My friend knows .. P</p>
									</div>
								</div>
							</div>
							{/* <div className='col-md-4 text-center animate-box'>
								<div className='services color-6'>
									<span className='icon'>
										<i className='icon-phone3' />
									</span>
									<div className='desc'>
										<h3>Digital Marketing</h3>
										<p>
											I use Instagram eight hours a day :){' '}
										</p>
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
