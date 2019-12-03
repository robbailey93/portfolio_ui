import React, { Component } from 'react';
import axios from 'axios';
//import TableRow from './TableRow';
//import { buildUrl } from '../connections/urls';
//import ProfileTable from './profile-table-comp';

class ProfileList extends Component {
	constructor(props) {
		super(props);
		this.state = { profile: {} };
	}
	componentDidMount() {
		axios
			.get('http://localhost:8080/profiles/5dba3a935b3d2f5e04209da5')
			//.get('http://localhost:8080/profiles/name/Robert/last/Bailey')
			.then(response => {
				//debugger;

				// let myProfile = response.data.find(function(element) {
				// 	return element.first_name === 'Robert';
				// });
				this.setState({ profile: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	tabRow() {
		// return this.state.profiles.map(function(object, i) {
		// 	return <ProfileTable obj={object} key={i} />;
		// });
	}

	// componentDidMount() {
	// 	axios
	// 		.get('http://localhost:8080/profiles')
	// 		.then(response => {
	// 			this.setState({ profiles: response.data });
	// 		})
	// 		.catch(function(error) {
	// 			console.log(error);
	// 		});
	// }

	// .get(buildUrl('profiles/') + this.props.match.params.id)
	// .get(buildUrl('profiles')
	// .then(response => {
	// 	this.setState({
	// 		first_name: response.data.first_name,
	// 		last_name: response.data.last_name,
	// 		email: response.data.email,
	// 		about: response.data.about,
	// 	});
	// })
	// .catch(function(error) {
	// 	console.log(error);
	// });
	//}

	profileUserData() {
		// return this.state.profiles.map(function(object, i) {
		// 	return <ProfileTable obj={object} key={i} />;
		// });
	}

	render() {
		return (
			<React.Fragment>
				<div className='dynamic-content'>
					<h2 className='colorlib-heading'>
						{this.state.profile.first_name}{' '}
						{this.state.profile.last_name}
					</h2>
					<div className='colorlib-sub-heading'>
						{this.state.profile.email}
					</div>
					<p>{this.state.profile.about}</p>
				</div>
				{/* <ProfileTable></ProfileTable> */}
			</React.Fragment>
		);
	}
}

export default ProfileList;
