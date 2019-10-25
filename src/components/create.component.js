import React, { Component } from 'react';
// import { isUserWhitespacable } from '@babel/types';
import axios from 'axios';
import { buildUrl } from '../connections/urls';

class Create extends Component {
	constructor(props) {
		super(props);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeAbout = this.onChangeAbout.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			about: '',
		};
	}

	onChangeFirstName(e) {
		this.setState({
			first_name: e.target.value,
		});
	}
	onChangeLastName(e) {
		this.setState({
			last_name: e.target.value,
		});
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangeAbout(e) {
		this.setState({
			about: e.target.value,
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const obj = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			about: this.state.about,
		};
		axios
			.post(buildUrl('profiles'), obj)
			.then(res => console.log(res.data));
		// .then(res => res.json())
		// .then(json => {

		this.setState({
			first_name: '',
			last_name: '',
			email: '',
			about: '',
			// first_name: json,
			// last_name: json,
			// email: json,
			// about: json,
		});
	}

	render() {
		return (
			<div className='container' style={{ marginTop: 10 }}>
				<h3>Add New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>First Name: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.first_name}
							onChange={this.onChangeFirstName}
						/>
					</div>

					<div className='form-group'>
						<label>Last Name: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.last_name}
							onChange={this.onChangeLastName}
						/>
					</div>
					<div className='form-group'>
						<label>Email: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.email}
							onChange={this.onChangeEmail}
						/>
					</div>
					<div className='form-group'>
						<label>About: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.about}
							onChange={this.onChangeAbout}
						/>
					</div>
					<div className='form-group'>
						<input
							type='submit'
							value='Submit User'
							className='btn btn-success'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Create;
