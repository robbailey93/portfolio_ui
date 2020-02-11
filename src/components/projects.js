import React, { Component } from 'react';

// export default class Projects extends Component {
	render() {
		return (
			<div id='portfolio-main'>
				<section className='portfolio-projects' data-section='projects'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<span className='heading-meta'>My Work</span>
								<h2 className='portfolio-heading'>
									Recent Projects
								</h2>
							</div>
						</div>
						<div className='row'>
							<div
								className='col-md-4'
								data-animate-effect='fadeInLeft'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-1.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 01</a>
											</h3>
											<span>Website</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-4'
								data-animate-effect='fadeInRight'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-2.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 02</a>
											</h3>
											<span>Animation</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-4'
								data-animate-effect='fadeInTop'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-3.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 03</a>
											</h3>
											<span>Illustration</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-4'
								data-animate-effect='fadeInBottom'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-4.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 04</a>
											</h3>
											<span>Application</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-4'
								data-animate-effect='fadeInLeft'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-5.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 05</a>
											</h3>
											<span>Graphic, Logo</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-4'
								data-animate-effect='fadeInRight'>
								<div
									className='project'
									style={{
										backgroundImage:
											'url(images/img-6.jpg)',
									}}>
									<div className='desc'>
										<div className='con'>
											<h3>
												<a href='work.html'>Work 06</a>
											</h3>
											<span>Web Design</span>
											<p className='icon'>
												<span>
													<a href='work.html'>
														<i className='icon-share3' />
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-eye' />{' '}
														100
													</a>
												</span>
												<span>
													<a href='work.html'>
														<i className='icon-heart' />{' '}
														49
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='row'>
							<div className='col-md-12'>
								<p>
									<a
										href='#'
										className='btn btn-primary btn-lg btn-load-more'>
										Load more <i className='icon-reload' />
									</a>
								</p>
							</div>
						</div> */}
					</div>
				</section>

				{/* <div
					id='portfolio-counter'
					className='portfolio-counters'
					style={{ background: url(images / cover_bg_1.jpg) }}
					data-stellar-background-ratio='0.5'>
					<div className='overlay'></div>
					<div className='portfolio-narrow-content'>
						<div className='row'></div>
						<div className='row'>
							<div className='col-md-3 text-center'>
								<span
									className='portfolio-counter js-counter'
									data-from='0'
									data-to='309'
									data-speed='5000'
									data-refresh-interval='50'></span>
								<span className='portfolio-counter-label'>
									Cups of coffee
								</span>
							</div>
							<div className='col-md-3 text-center'>
								<span
									className='portfolio-counter js-counter'
									data-from='0'
									data-to='356'
									data-speed='5000'
									data-refresh-interval='50'></span>
								<span className='portfolio-counter-label'>
									Projects
								</span>
							</div>
							<div className='col-md-3 text-center'>
								<span
									className='portfolio-counter js-counter'
									data-from='0'
									data-to='30'
									data-speed='5000'
									data-refresh-interval='50'></span>
								<span className='portfolio-counter-label'>
									Clients
								</span>
							</div>
							<div className='col-md-3 text-center'>
								<span
									className='portfolio-counter js-counter'
									data-from='0'
									data-to='10'
									data-speed='5000'
									data-refresh-interval='50'></span>
								<span className='portfolio-counter-label'>
									Partners
								</span>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}
