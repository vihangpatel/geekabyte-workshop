// Library Imports
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'

// App Component Imports
import TabBar from './movie-island/TabBar'
import List from './movie-island/List'

// API url config
import { getNowShowing, getTopRated } from './AppActionCreator'

class App extends Component {
  constructor () {
    super()

    this.onTabChange = this.onTabChange.bind(this)
    this.state = { selectedType: 'now_showing' }
  }

  componentDidMount () {
     this.props.dispatch(getNowShowing())
     this.props.dispatch(getTopRated())
  }

  onTabChange (selectedType) {
    this.setState({
      selectedType
    })
  }

  render () {
    const { selectedType } = this.state
    const { nowShowing, topRated } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Movie-island</h1>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <p className='App-intro'>Click on the Following Tabs</p>
        <TabBar selectedType={selectedType} onTabChange={this.onTabChange} />
        {selectedType === 'top_rated' && topRated && <List data={topRated} />}
        {selectedType === 'now_showing' && nowShowing && <List data={nowShowing} />}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nowShowing: state.movies.nowShowing,
    topRated: state.movies.topRated
  }
}

export default connect(mapStateToProps)(App)
