import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class MainSection extends Component {
	render() {
		return (
			<Router>
				<div id='colorlib-main'>
					<section>
						<div className='colorlib-narrow-content'></div>
					</section>
				</div>
			</Router>
		);
	}
}

export default MainSection;
