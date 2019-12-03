import React, { Component } from 'react';
// import { buildUrl } from '../connections/urls';
// const cors = require('cors');

class Education extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		school: '',
	// 		course_of_study: '',
	// 		is_complete: '',
	// 		additional_info: '',
	// 	};
	// }

	// componentDidMount() {
	// 	let url = buildUrl('education');
	// 	fetch(url)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			this.setState({
	// 				school: json,
	// 				course_of_study: json,
	// 				is_complete: json,
	// 				additional_info: json,
	// 			});
	// 		});
	// }

	render() {
		return (
			<div id='colorlib-main'>
				<section className='colorlib-education' data-section='projects'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
								data-animate-effect='fadeInLeft'>
								<span className='heading-meta'>EDU</span>
								<h2 className='colorlib-heading animate-box'>
									Education -fetch api here
								</h2>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Education;
