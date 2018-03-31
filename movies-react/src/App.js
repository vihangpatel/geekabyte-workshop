import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// App Component Imports
import TabBar from './movie-island/TabBar'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>Welcome to Movie-island</h1>
				</header>
				<p className='App-intro'>Click on the Following Tabs</p>
				<TabBar />
			</div>
		)
	}
}

export default App
