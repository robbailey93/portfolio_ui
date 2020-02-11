import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Navbar from 'react-bootstrap/Navbar';
import SidebarFooter from './sidebar-footer';

class Sidebar extends Component {
	render() {
		return (
			<aside id='portfolio-aside' className='border js-fullheight'>
				<div className='text-center'>
					<div
						className='author-img'
						style={{
							backgroundImage: 'url(images/about.jpg)',
						}}></div>
					<h2 className='profile-name'>
						Robert D. Bailey
						{/* <Link to={'/profiles'}>Robert D. Bailey</Link> */}
					</h2>
					<div className='email'>
						<i className='icon-mail'></i>{' '}
						<a href='mailto:rob@bailey.net'>rob@bailey.net</a>
					</div>
					<nav
						id='portfolio-main-menu'
						role='navigation'
						className='navbar'>
						<div id='navbar' className='collapse'>
							<ul>
								<li className='nav-item'>
									<Link to={'/profiles'} className='nav-link'>
										About
									</Link>
								</li>
								<li className='nav-item'>
									<Link to={'/skills'} className='nav-link'>
										Skills
									</Link>
								</li>
								<li className='nav-item'>
									<Link to={'/projects-comp'} className='nav-link'>
										Projects
									</Link>
								</li>
								<li className='nav-item'>
									<Link to={'/workexp'} className='nav-link'>
										Work Experience
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to={'/education'}
										className='nav-link'>
										Education
									</Link>
								</li>
								{/* <li className='nav-item'>
									<Link to={'/create'} className='nav-link'>
										Create
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to={'/index-list'}
										className='nav-link'>
										Index
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										to={'/knowledgebase'}
										className='nav-link'>
										Knowledge Base
									</Link>
								</li> */}
							</ul>
						</div>
					</nav>{' '}
					<SidebarFooter></SidebarFooter>
				</div>
			</aside>
		);
	}
}

export default Sidebar;
