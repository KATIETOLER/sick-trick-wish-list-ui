import { Component } from 'react'
import './App.css'
import Tricks from './Tricks'
import fetchData from './api-calls'

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
	}

	render() {
		return (
			<div className='App'>
				<h1>Sick Trick Wish List</h1>
				<Tricks tricks={this.state.tricks} />
			</div>
		)
	}
}

export default App
