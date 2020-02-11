import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

//import { buildUrl } from '../connections/urls';

class IndexList extends Component {
	constructor(props) {
		super(props);
		this.state = { profiles: [] };
	}
	componentDidMount() {
		axios
			.get('http://localhost:8080/profiles')
			.then(response => {
				this.setState({ profiles: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	tabRow() {
		return this.state.profiles.map(function(object, i) {
			return <TableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<section id='portfolio-main'>
				<h3 align='center'>User List</h3>
				<table
					className='table table-striped'
					style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>About</th>
							<th colSpan='2'>Action</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</table>
			</section>
		);
	}
}

export default IndexList;
