import React, { Component } from 'react';
// import { buildUrl } from '../connections/urls';
// const cors = require('cors');

class Education extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		school: '',
	// 		course_of_study: '',
	// 		is_complete: '',
	// 		additional_info: '',
	// 	};
	// }

	// componentDidMount() {
	// 	let url = buildUrl('education');
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			this.setState({
	// 				school: json,
	// 				course_of_study: json,
	// 				is_complete: json,
	// 				additional_info: json,
	// 			});
	// 		});
	// }

	render() {
		return (
			<div id='portfolio-main'>
				<section className='portfolio-education' data-section='projects'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
								Education
								</h2>
									<span className='heading-meta'>Continuous Learning is Important</span>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-12'>
								<div className='timeline-centered'>
									<article
										className='timeline-entry'
										data-animate-effect='fadeInLeft'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-3'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
												<h2>HelioTraining, Salt Lake City, UT</h2>
												<h3>Full Stack Web Development (Level 2) Certificate of Completion (MERN Stack)</h3>
													<div className='start-end-date'>
													September 2019 - November 2019
													</div>
													<p>After testing out of Level 1, completed the Level 2 course, comprised of 96 classroom hours of hands-on learning of advanced web development technologies, such as advanced front-end development, the latest back-end server-side applications, and supporting data stores plus query languages. Technologies included:</p>
													
														<ul>
															<li>JavaScript</li>
															<li>React.js</li>
															<li>Node.js</li>
															<li>NPM</li>
															<li>Express</li>
															<li>RESTful APIs</li>
															<li>Git Flow models</li>
															<li>Web Frameworks</li>
															<li>Data Modeling</li>
														</ul>
												
											</div>
										</div>
									</article>
									<article
										className='timeline-entry'
										data-animate-effect='fadeInTop'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-4'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
												<h2>DevMountain, Provo, UT</h2>
												<h3>Front End Web Development Certificate of Completion (MEAN Stack)</h3>
													<div className='start-end-date'>
													February 2014 – May 2014
													</div>
												<p>Completed the 12-week, intensive, Dev-Bootcamp style training course that focused on Front End Development and Core Web Engineering Skills. Technologies included:</p>
												
													<ul>
														<li>HTML5</li>
														<li>CSS3</li>
														<li>Bootstrap</li>
														<li>Web App Development</li>
														<li>JavaScript</li>
														<li>jQuery</li>
														<li>Node.js</li>
														<li>Git Collaboration</li>
														<li>Test Driven Development</li>
														<li>Angular.js</li>
													</ul>
												
											</div>
										</div>
									</article>
									<article
										className='timeline-entry'
										data-animate-effect='fadeInLeft'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-5'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
												<h2>University of Hawaii at Manoa, Honolulu, HI</h2>
												<h3>Web Development &amo; Design Certificate of Completion</h3>
													{/* <div className='start-end-date'>
													August 2014 – December 2014
													</div> */}
												<p>Completed several Post-Baccalaureate courses at University of Hawaii on web development, graphics and multimedia design, video production and Internet marketing.</p>
											</div>
										</div>
									</article>
									<article
										className='timeline-entry'
										data-animate-effect='fadeInLeft'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-1'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
												<h2>Arizona State University, Tempe, AZ</h2>
												<h3>Bachelor's Degree, Russian Language and Linguistics</h3>
													{/* <div className='start-end-date'>
													August 2014 – December 2014
													</div> */}
												<p>In addition to Language and Linguistics studies, I took several courses in other fields, such as Business, Computer Science, Anthropology, Aeronautical Engineering, Materials Science, and Jet Propulsion. Prior to graduating with a BA, I completed an immersive summer session language course at Moscow State University in Russia.</p>
											</div>
										</div>
									</article>
									<article
										className='timeline-entry begin'
										data-animate-effect='fadeInBottom'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-none'></div>
										</div>
									</article>
								</div>
							</div>
						</div>

					</div>
				</section>
			</div>
		);
	}
}

export default Education;
