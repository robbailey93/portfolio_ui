import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowx extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}
	delete() {
		axios
			.delete('http://localhost:8080/profiles/' + this.props.obj._id)
			.then(console.log('May be deleted, but check MongoDB to be sure!!'))
			.catch(err => console.log(err));
	}
	render() {
		return (
			<React.Fragment>
				<tr>
					<td>{this.props.obj.skill_name}</td>
					<td>{this.props.obj.skill_level}</td>
					<td>
						<Link
							to={'/editArea/' + this.props.obj._id}
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
			</React.Fragment>
		);
	}
}

export default TableRowx;
