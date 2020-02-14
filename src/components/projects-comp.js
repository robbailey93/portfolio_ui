import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		return (
			<div id='portfolio-main'>
				<section className='portfolio-projects' data-section='projects'>
					<div className='portfolio-narrow-content'>
                        <div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
								Recent Projects
								</h2>
								<span className='heading-meta'>Projects</span>
							</div>
						</div>
                    </div>
                </section> 
                <section> 
                    <div className='portfolio-narrow-content'>      
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
												<h2>ReactJS Portfolio Project</h2>
										
                                                    <ul>
                                                        <li>ReactJS</li>
                                                        <li>NodeJS</li>
                                                        <li>Express</li>
                                                        <li>Axios</li>
                                                        <li>MongoDB</li>
                                                    </ul>
                                             
												<p></p>
												<p></p>
											</div>
										</div>
									</article>
									{/* <article
										className='timeline-entry'
										data-animate-effect='fadeInTop'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-4'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
                                                <h2></h2>
												<p></p>
												<p></p>
												<p></p>
											</div>
										</div>
									</article> */}
									{/* <article
										className='timeline-entry'
										data-animate-effect='fadeInLeft'>
										<div className='timeline-entry-inner'>
											<div className='timeline-icon color-5'>
												<i className='icon-pen2' />
											</div>
											<div className='timeline-label'>
                                                <h2></h2>
												<p></p>
												<p></p>
												<p></p>
											</div>
										</div>
									</article> */}
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
