import React, { Component } from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

// import Sidebar from './components/sidebar';
// import Profiles from './components/profiles';
// import Skills from './components/skills';
// import Projects from './components/projects';
// import WorkExperience from './components/work-experience';
// import Education from './components/education';
// import KnowledgeBase from './components/knowledge-base';

//let focusedUser:'_id';
// send focussed user id to page (child and sub-child)components through use of props
//  need to add user id to schemas

//  put the hard coded user id in the base url

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<Link to={'/'} className='navbar-brand'>
							My Portfolio
						</Link>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'>
							<ul className='navbar-nav mr-auto'>
								<li className='nav-item'>
									<Link to={'/'} className='nav-link'>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link to={'/create'} className='nav-link'>
										Create
									</Link>
								</li>
								<li className='nav-item'>
									<Link to={'/index'} className='nav-link'>
										Index
									</Link>
								</li>
							</ul>
						</div>
					</nav>{' '}
					<br />
					<h2>Welcome to My Profile</h2> <br />
					<Switch>
						<Route exact path='/create' component={Create} />
						<Route path='/edit/:id' component={Edit} />
						<Route path='/index' component={Index} />
					</Switch>
				</div>
			</Router>

			// <div className='container'>
			// 	<div id='colorlib-page'>
			// 		<Sidebar></Sidebar>
			// 		<div id='colorlib-main'>
			// 			<br />
			// 			<Profiles></Profiles>
			// 			<Skills></Skills>
			// 			<Projects></Projects>
			// 			<WorkExperience></WorkExperience>
			// 			<Education></Education>
			// 			<KnowledgeBase></KnowledgeBase>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default App;
