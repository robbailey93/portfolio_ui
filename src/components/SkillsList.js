import React, { Component } from 'react';
import axios from 'axios';
import { buildUrl } from '../connections/urls';

class SkillsList extends Component {
	constructor(props) {
		super(props);
		this.state = { skill: [] };
	}

	componentDidMount() {
		axios
			//.get('http://localhost:8080/skills')
			.get(buildUrl('skills'))

			.then(response => {
				// debugger;
				console.log('Response-data', response.data);
				this.setState({ skill: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		// let allSkills = this.state.skill.map(skill => (
		// 	// need to add key to map output so each instance gets an id
		// 	<div key={skill._id}>
		// 		{skill.skill_name} - {skill.skill_level}
		// 	</div>
		// ));

		// let skillNames = this.state.skill.skill_name.map(skill => (
		// 	// need to add key to map output so each instance gets an id
		// 	<div key={skill._id}>{skill.skill_name}</div>
		// ));

		let allSkills = this.state.skill.map(skill => (
			// need to add key to map output so each instance gets an id
			<div key={skill._id}>
				{skill.skill_name}
				<div
					className='progress-bar color-1'
					role='progressbar'
					aria-valuenow='75'
					aria-valuemin='0'
					aria-valuemax='100'
					style={{ width: 75 + '%' }}></div>
			</div>
		));

		let skLevels = this.state.skill.map(skill => (
			// need to add key to map output so each instance gets an id
			<div key={skill._id}>{skill.skill_level}</div>
		));

		// skillName() {
		// 	return this.state.skill.skill_name.map(function(object, i) {
		// 		return <TableRow obj={object} key={i} />;
		// 	});
		//}

		return (
			<>
				<section className='portfolio-skills' data-section='skills'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
									My Skills
								</h2>
							</div>
						</div>
						<div className='row'>
							<div
								className='col-sm-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<h3>{allSkills}</h3>
								</div>
							</div>

							{/* <div
								className='col-sm-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<div className='progress'>
										<div
											className='progress-bar color-1'
											role='progressbar'
											aria-valuenow='75'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 75 + '%' }}>
											{skLevels}
											<span>75%</span>
										</div>
									</div>
								</div>
							</div> */}

							{/* <div
								className='col-md-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<h3>
									
										<div
											className='progress progress-bar color-1'
											role='progressbar'
											aria-valuenow='75'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 75 + '%' }}>
									
											{skLevels}
										</div>
								
									</h3>
								</div>
							</div> */}
						</div>
					</div>
				</section>

				{/* <div>
					<SkillsAdmin />
				</div> */}

				{/* <div>
					<Button variant='primary' onClick={handleShow}>
						Launch demo modal
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Woohoo, you're reading this text in a modal!
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
							<Button variant='primary' onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Modal>
				</div> */}

				{/* <section className='portfolio-skills' data-section='skills'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<h2 className='portfolio-heading'>
									Not My Skills
								</h2>
							</div>
						</div>
						<div className='row'> */}
				{/* <div
								className='col-md-12'
								data-animate-effect='fadeInLeft'>
								<p>
									The Big Oxmox advised her not to do so,
									because there were thousands of bad Commas,
									wild Question Marks and devious Semikoli,
									but the Little Blind Text didn’t listen. She
									packed her seven versalia, put her initial
									into the belt and made herself on the way.
								</p>
							</div> */}
				{/* <div
								className='col-md-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<h3>Photoshop</h3>
									<div className='progress'>
										<div
											className='progress-bar color-1'
											role='progressbar'
											aria-valuenow='75'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 75 + '%' }}>
											<span>75%</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-6'
								data-animate-effect='fadeInRight'>
								<div className='progress-wrap'>
									<h3>jQuery</h3>
									<div className='progress'>
										<div
											className='progress-bar color-2'
											role='progressbar'
											aria-valuenow='60'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 60 + '%' }}>
											<span>60%</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<h3>HTML5</h3>
									<div className='progress'>
										<div
											className='progress-bar color-3'
											role='progressbar'
											aria-valuenow='85'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 85 + '%' }}>
											<span>85%</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-6'
								data-animate-effect='fadeInRight'>
								<div className='progress-wrap'>
									<h3>CSS3</h3>
									<div className='progress'>
										<div
											className='progress-bar color-4'
											role='progressbar'
											aria-valuenow='90'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 90 + '%' }}>
											<span>90%</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-6'
								data-animate-effect='fadeInLeft'>
								<div className='progress-wrap'>
									<h3>WordPress</h3>
									<div className='progress'>
										<div
											className='progress-bar color-5'
											role='progressbar'
											aria-valuenow='70'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 70 + '%' }}>
											<span>70%</span>
										</div>
									</div>
								</div>
							</div>
							<div
								className='col-md-6'
								data-animate-effect='fadeInRight'>
								<div className='progress-wrap'>
									<h3>SEO</h3>
									<div className='progress'>
										<div
											className='progress-bar color-6'
											role='progressbar'
											aria-valuenow='80'
											aria-valuemin='0'
											aria-valuemax='100'
											style={{ width: 80 + '%' }}>
											<span>80%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			</>
		);
	}
}

export default SkillsList;
