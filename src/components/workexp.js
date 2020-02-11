import React, { Component } from 'react';

class WorkExperience extends Component {
	render() {
		return (
			<div id='portfolio-main'>
				<section className='portfolio-work' data-section='timeline'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
								Work Experience
								</h2>
								<span className='heading-meta'>Timeline</span>
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
												<h2>Front End Developer</h2>
												<h3>Impartner Software</h3>
													<div className='start-end-date'>
													April 2015 - April 2019
													</div>
												<p>Utilized HTML5, CSS3, SASS, Bootstrap, JavaScript, jQuery, NPM, Node, build tools and unit testing tools. Worked on localization, using i18n, for translating key parts of applications. Also had exposure to TypeScript, many JS Libraries and SPA environments.</p>
												<p>Instrumental in leading a project to rebuild the customer portal Front End template to enable the onboarding process of new customers to be faster and more efficient by restructuring the portal template via a theming concept using SASS to auto re-write CSS styling with mix-ins, maps, and functions.</p>
												<p>Partnered with other Engineering Team members to provide expertise and support to implement overall styling requirements from Design/Product Team for new product releases. Collaborated closely with QA to fix bugs and run tests. Made efforts to ensure that applications would provide a good user experience and were Mobile Responsive.</p>
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
												<h2>Web Developer, Web Optimization &amp; SEO Consultant</h2>
												<h3>North Shore Media, LLC</h3>
													<div className='start-end-date'>
													January 2015 – March 2015
													</div>
												<p>Developed several WordPress websites for businesses, integrating CSS customization and adding jQuery plugins to enhance features of the websites.</p>
												<p>Successfully completed an SEO consulting project for PROBAR, making SEO configurations to their new website, which was suffering from a large decrease in web traffic. Made upgrades and changes to the on-page SEO of their site, https://theprobar.com/, and their NetSuite web store, which resulted in the web traffic to these sites almost doubling to over 50,000 page views per month.</p>
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
												<h2>Mobile Responsive Web App Developer</h2>
												<h3>PDS, on contract to LDS Church-ICS</h3>
													<div className='start-end-date'>
													August 2014 – December 2014
													</div>
												<p>Worked on converting an enterprise web application to a Mobile Responsive, hybrid web app. Used HTML5, CSS3, Bootstrap 3 and Cordova PhoneGap to convert the app into a hybrid mobile web app.</p>
												<p>Was involved in creating the UI, coding prototypes and participated in the Agile-Scrum development process, including sprint planning and review.</p>
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

export default WorkExperience;
