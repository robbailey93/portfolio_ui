import React, { Component } from 'react';
import axios from 'axios';
import { buildUrl } from '../connections/urls';

class SkillsAdmin extends Component {
	constructor(props) {
		super(props);
		this.onChangeSkillName = this.onChangeSkillName.bind(this);
		this.onChangeSkillLevel = this.onChangeSkillLevel.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			skill_name: '',
			skill_level: '',
		};
	}

	onChangeSkillName(e) {
		this.setState({
			skill_name: e.target.value,
		});
	}
	onChangeSkillLevel(e) {
		this.setState({
			skill_level: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			skill_name: this.state.skill_name,
			skill_level: this.state.skill_level,
		};
		axios.post(buildUrl('skills'), obj).then(res => console.log(res.data));
		this.setState({
			skill_name: '',
			skill_level: '',
		});
	}

	render() {
		return (
			<div
				id='colorlib-main'
				className='add-update-form'
				style={{ marginTop: 10 }}>
				<h3>Add New Skill</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Skill Name: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.skill_name}
							onChange={this.onChangeSkillName}
						/>
					</div>

					<div className='form-group'>
						<label>Skill Level: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.skill_level}
							onChange={this.onChangeSkillLevel}
						/>
					</div>

					<div className='form-group'>
						<input
							type='submit'
							value='Submit Skill'
							className='btn btn-success'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SkillsAdmin;
