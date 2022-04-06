import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			obstacle: '',
			stance: '',
			tutorial: '',
			id: '',
		}
	}
	clearInputs = () => {
		this.setState({
			name: '',
			obstacle: '',
			stance: '',
			tutorial: '',
			id: '',
		})
	}
	submitTrick = (event) => {
		event.preventDefault()
		const newTrick = {
			id: Date.now(),
			...this.state,
		}
		this.props.addTrick(newTrick)
		this.clearInputs()
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}
	render() {
		return (
			<form>
				<input
					type='text'
					name='name'
					placeholder='trick name'
					value={this.state.name}
					className='name'
					onChange={(event) => this.handleChange(event)}
				/>
				<input
					type='text'
					name='tutorial'
					className='tutorial'
					placeholder='tutorial link'
					value={this.state.tutorial}
					onChange={(event) => this.handleChange(event)}
				/>
				<select
					name='obstacle'
					id='obstacle'
					value={this.state.obstacle}
					onChange={(event) => this.handleChange(event)}>
					<option value='Flatground'>Flatground</option>
					<option value='Ledge'>Ledge</option>
					<option value='Rail'>Rail</option>
					<option value='Stairs'>Stairs</option>
					<option value='Pool'>Pool</option>
				</select>
				<select
					name='stance'
					id='stance'
					value={this.state.stance}
					onChange={(event) => this.handleChange(event)}>
					<option value='Regular'>Regular</option>
					<option value='Switch'>Switch</option>
				</select>
				<button onClick={(event) => this.submitTrick(event)}>SUBMIT</button>
			</form>
		)
	}
}

export default Form
