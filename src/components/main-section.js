import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class MainSection extends Component {
	render() {
		return (
			<Router>
				<div id='portfolio-main'>
					<section>
						<div className='portfolio-narrow-content'></div>
					</section>
				</div>
			</Router>
		);
	}
}

export default MainSection;
