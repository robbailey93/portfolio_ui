import React, { Component } from 'react';
//import React, { Component, useState } from 'react';

import SkillsList from './SkillsList';
import SkillsModal from './SkillsModal';

class Skills extends Component {
	render() {
		return (
			<>
				<div id='portfolio-main'>
					{/* <section className='portfolio-skills' data-section='projects'>
					<div className='portfolio-narrow-content'>
						<div className='row'>
							<div
								className='col-md-6 col-md-offset-3 col-md-pull-3'
								data-animate-effect='fadeInLeft'>
								<span className='heading-meta'>Skills</span>
								<h2 className='portfolio-heading'>
									Skills -fetch api here
								</h2>
							</div>
						</div>
					</div>
				</section> */}
					<section className='portfolio-about' data-section='about'>
						<div className='portfolio-narrow-content'>
							<div className='row'>
								<div className='col-sm-12'>
									<div
										className='row row-bottom-padded-sm'
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
