import React, { Component } from 'react';
//import React, { Component, useState } from 'react';

//import Skills from './skills';
import SkillsList from './SkillsList';
import SkillsModal from './SkillsModal';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import Jumbotron from 'react-bootstrap/Jumbotron';

class Skills extends Component {
	render() {
		return (
			<>
				<div id='colorlib-main'>
					{/* <section className='colorlib-skills' data-section='projects'>
					<div className='colorlib-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
								data-animate-effect='fadeInLeft'>
								<span className='heading-meta'>Skills</span>
								<h2 className='colorlib-heading animate-box'>
									Skills -fetch api here
								</h2>
							</div>
						</div>
					</div>
				</section> */}
					<section className='colorlib-about' data-section='about'>
						<div className='colorlib-narrow-content'>
							<div className='row'>
								<div className='col-sm-12'>
									<div
										className='row row-bottom-padded-sm animate-box'
										data-animate-effect='fadeInLeft'>
										<div className='col-sm-12'>
											<div className='about-desc'>
												<SkillsList></SkillsList>
												<SkillsModal></SkillsModal>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}

export default Skills;
