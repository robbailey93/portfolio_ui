import React, { Component } from 'react';
// import { buildUrl } from '../connections/urls';

//import { Jumbotron } from 'reactstrap';

//import axios from 'axios';
import ProfileList from './profile-list-comp';
//import TableRow from './TableRow';

class Profiles extends Component {
	render() {
		return (
			<div id='colorlib-main'>
				<section className='colorlib-about' data-section='about'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div className='col-sm-12'>
								<div
									className='row row-bottom-padded-sm animate-box'
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
				<section className='colorlib-about'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
								data-animate-effect='fadeInLeft'>
								{/* <span className='heading-meta'>What I do?</span> */}
								<h2 className='colorlib-heading'>
									Here are some of my skills and knowledge
								</h2>
							</div>
						</div>
						<div className='row row-pt-md'>
							<div className='col-md-4 text-center animate-box'>
								<div className='services color-1'>
									<span className='icon'>
										{/* <i className='icon-display' /> */}
										<i className='fas fa-camera'></i>
									</span>
									<div className='desc'>
										<h3>Web Development </h3>
										<p>
											I have experience building websites
											and web applications using HTML5,
											CSS3, SASS, JavaScript,and React
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
