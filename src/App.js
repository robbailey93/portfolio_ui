import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import TopNavbar from './components/topnavbar';
import Sidebar from './components/sidebar';

import Profiles from './components/profiles';
import Skills from './components/skills';
import Projects from './components/projects';
import WorkExperience from './components/workexp';
import Education from './components/education';
import KnowledgeBase from './components/knowledgebase';

import Create from './components/create';
import Edit from './components/edit';
import IndexList from './components/index-list';

//let focusedUser:'_id';
// send focussed user id to page (child and sub-child)components through use of props
//  need to add user id to schemas

//  put the hard coded user id in the base url

class App extends Component {
	render() {
		return (
			<Router>
				{/* <TopNavbar /> */}
				<Sidebar>
					{/* {routes.map(route => (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
							component={route.sidebar}
						/>
					))} */}
				</Sidebar>

				<Switch>
					     
					<Route path='/create' component={Create} />          
					<Route path='/edit/:id' component={Edit} />
					<Route path='/index-list' component={IndexList} />
					<Route path='/profiles/' component={Profiles} />
					<Route path='/skills' component={Skills} />
					<Route path='/workexp' component={WorkExperience} />
					<Route path='/projects' component={Projects} />
					<Route path='/education' component={Education} />
					<Route path='/knowledgebase' component={KnowledgeBase} /> 
				</Switch>
			</Router>
		);
	}
}

export default App;
