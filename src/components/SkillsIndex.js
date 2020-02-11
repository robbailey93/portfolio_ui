import React, { Component } from 'react';
import axios from 'axios';
import SkillsTableRow from './SkillsTableRow';

//import { buildUrl } from '../connections/urls';

class SkillsIndex extends Component {
	constructor(props) {
		super(props);
		this.state = { skills: [] };
	}
	componentDidMount() {
		axios
			.get('http://localhost:8080/skills')
			.then(response => {
				this.setState({ skills: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	tabRow() {
		return this.state.skills.map(function(object, i) {
			return <SkillsTableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<section id='portfolio-main'>
				<h3 align='center'>Skills List</h3>
				<table
					className='table table-striped'
					style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Skill</th>
							<th>Level</th>

							<th colSpan='2'>Action</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</table>
			</section>
		);
	}
}

export default SkillsIndex;
