import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

class SidebarFooter extends Component {
	render() {
		return (
			<div className='portfolio-footer'>
				<p className='smaller'>
					<small>
						Made with <FontAwesomeIcon icon={faHeart} /> and{' '}
						<FontAwesomeIcon icon={faCoffee} />
					</small>
				</p>
				<p className='smaller'>
					<small>
						Thanks{' '}
						<a
							href='https://colorlib.com'
							target='_blank'
							rel='noopener noreferrer'>
							{' '}
							Colorlib
						</a>{' '}
						for inspiration
					</small>
				</p>
			</div>
		);
	}
}

export default SidebarFooter;
