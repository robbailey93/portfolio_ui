// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Sidebar from './components/sidebar';
import Profiles from './components/profiles';
import Skills from './components/skills';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Education from './components/education';
import KnowledgeBase from './components/knowledge-base';

class App extends Component {
	render() {
		return (
			<div id='colorlib-page'>
				<div id='container-wrap'>
					<Sidebar></Sidebar>
					<div id='colorlib-main'>
						<Profiles></Profiles>
						<Skills></Skills>
						<Projects></Projects>
						<WorkExperience></WorkExperience>
						<Education></Education>
						<KnowledgeBase></KnowledgeBase>
					</div>
				</div>
			</div>
		);
	}
}

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className='App-link'
// 					href='https://reactjs.org'
// 					target='_blank'
// 					rel='noopener noreferrer'>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

export default App;
