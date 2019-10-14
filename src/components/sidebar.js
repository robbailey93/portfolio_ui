import React, { Component } from 'react';

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav
						href='#navbar'
						className='js-colorlib-nav-toggle colorlib-nav-toggle'
						data-toggle='collapse'
						data-target='#navbar'
						aria-expanded='false'
						aria-controls='navbar'>
						<i />
					</nav>
					<aside id='colorlib-aside' className='border js-fullheight'>
						<div className='text-center'>
							<div
								className='author-img'
								style={{
									backgroundImage: 'url(images/about.jpg)',
								}}
							/>
							<h1 id='colorlib-logo'>
								<a href='index.html'>Robert D. Bailey</a>
							</h1>
							<span className='email'>
								<i className='icon-mail'></i>{' '}
								<a href='mailto:rob@bailey.net'>
									rob@bailey.net
								</a>
							</span>
						</div>
						<nav
							id='colorlib-main-menu'
							role='navigation'
							className='navbar'>
							<div id='navbar' className='collapse'>
								<ul>
									<li className='active'>
										<a href='#home' data-nav-section='home'>
											Profile
										</a>
									</li>
									<li>
										<a
											href='#skills'
											data-nav-section='skills'>
											Skills
										</a>
									</li>
									<li>
										<a
											href='#projects'
											data-nav-section='projects'>
											Projects
										</a>
									</li>
									<li>
										<a
											href='#work-experience'
											data-nav-section='work-experience'>
											Work Experience
										</a>
									</li>
									<li>
										<a
											href='#education'
											data-nav-section='education'>
											Education
										</a>
									</li>
									<li>
										<a
											href='#knowledge-base'
											data-nav-section='knowledge-base'>
											Knowledge Base
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id='colorlib-main-menu'>
							<ul>
								<li>
									<a
										href='https://www.linkedin.com/in/robbailey-web-dev'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='icon-linkedin2' />
									</a>
								</li>
								<li>
									<a
										href='https://github.com/robbailey93'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='icon-github'></i>
									</a>
								</li>
							</ul>
						</nav>
						<div className='colorlib-footer'>
							<p>
								<small>
									Made with{' '}
									<i
										className='icon-heart'
										aria-hidden='true'
									/>{' '}
									and{' '}
									<i
										className='icon-brain'
										aria-hidden='true'></i>
									<br></br>
									Thanks{' '}
									<a
										href='https://colorlib.com'
										target='_blank'
										rel='noopener noreferrer'>
										Colorlib
									</a>{' '}
									for inspiration
								</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}
