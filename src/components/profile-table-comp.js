import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
// import { buildUrl } from '../connections/urls';

class ProfileTable extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.delete = this.delete.bind(this);
	// }
	// delete() {
	// 	axios
	// 		.delete('http://localhost:8080/profiles/' + this.props.obj._id)
	// 		.then(console.log('May be deleted, but check MongoDB to be sure!!'))
	// 		.catch(err => console.log(err));
	// }

	// const obj = {
	//     first_name: this.state.first_name,
	//     last_name: this.state.last_name,
	//     email: this.state.email,
	//     about: this.state.about,
	// };

	// 	this.delete = this.delete.bind(this);

	// delete() {
	// 	axios
	// 		.delete('http://localhost:8080/profiles/' + this.props.obj._id)
	// 		.then(console.log('May be deleted, but check MongoDB to be sure!!'))
	// 		.catch(err => console.log(err));
	// }
	render() {
		return (
			<React.Fragment>
				<br />
				<br />

				<h2 className='colorlib-heading'>
					{this.props.obj.first_name} {this.props.obj.last_name}
				</h2>
				<div className='colorlib-sub-heading'>
					{this.props.obj.email}
				</div>
				<p>{this.props.obj.about}</p>
			</React.Fragment>
		);
	}
}

export default ProfileTable;
