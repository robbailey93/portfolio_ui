import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { buildUrl } from '../connections/urls';

class SkillsTableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}
	delete() {
		axios
			.delete('http://localhost:8080/skills/' + this.props.obj._id)
			.then(console.log('May be deleted, but check MongoDB to be sure!!'))
			.catch(err => console.log(err));
	}
	render() {
		return (
			<>
				<tr>
					<td>{this.props.obj.skill_name}</td>
					<td>{this.props.obj.skill_level}</td>

					<td>
						<Link
							to={'/edit/' + this.props.obj._id}
							//to={'/edit/' + this.props.obj._id}
							className='btn btn-primary'>
							Edit
						</Link>
					</td>
					<td>
						<button
							onClick={this.delete}
							className='btn btn-danger'>
							Delete
						</button>
					</td>
				</tr>
			</>
		);
	}
}

export default SkillsTableRow;
