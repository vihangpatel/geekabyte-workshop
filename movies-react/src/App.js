import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// App Component Imports
import TabBar from './movie-island/TabBar'

class App extends Component {
	constructor() {
		super()

		this.onTabChange = this.onTabChange.bind(this)
	}

	onTabChange(event) {
		console.log('selected type :', event.target.getAttribute('data-type'))
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>Welcome to Movie-island</h1>
				</header>
				<p className='App-intro'>Click on the Following Tabs</p>
				<TabBar onTabChange={this.onTabChange} />
			</div>
		)
	}
}

export default App
