import { Component } from 'react'
import './App.css'
import Tricks from './Tricks'
import fetchData from './api-calls'
import Form from './Form'

class App extends Component {
	constructor() {
		super()
		this.state = {
			tricks: [],
			error: '',
		}
	}
	componentDidMount = () => {
		fetchData
			.getTricks()
			.then((data) => this.setState({ tricks: data }))
			.catch((error) => this.setState({ error: error }))
		// fetchData.postTrick(newTrick)
	}
	addTrick = (newTrick) => {
		this.setState({ tricks: [...this.state.tricks, newTrick] })
	}
	deleteTrick = (id) => {
		const filteredTricks = this.state.tricks.filter((trick) => trick.id != id)
		this.setState({ tricks: filteredTricks })
	}

	render() {
		return (
			<div className='App'>
				<h1 className='title'>Sick Trick Wish List</h1>
				<Form addTrick={this.addTrick} />
				<Tricks tricks={this.state.tricks} deleteTrick={this.deleteTrick} />
			</div>
		)
	}
}

export default App
