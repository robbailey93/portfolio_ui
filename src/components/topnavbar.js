import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';

class TopNavbar extends Component {
	render() {
		return (
			<nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
				<Link to={'/'} className='navbar-brand'>
					My Portfolio
				</Link>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item'>
							<NavLink
								exact
								activeStyle={{ color: 'red' }}
								to={'/'}
								className='nav-link'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeStyle={{ color: 'red' }}
								to={'/create'}
								className='nav-link'>
								Create
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeStyle={{ color: 'red' }}
								to={'/index-list'}
								className='nav-link'>
								Index
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeStyle={{ color: 'red' }}
								to={'/profiles'}
								className='nav-link'>
								Profiles
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink
								activeStyle={{ color: 'red' }}
								to={'/skills'}
								className='nav-link'>
								Skills
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default TopNavbar;
