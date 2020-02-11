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
			<div id='portfolio-main'>
				<section className='portfolio-education' data-section='projects'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
								Education
								</h2>
									<span className='heading-meta'>Coming soon</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Education;
