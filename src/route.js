import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header/index.jsx'
import Home from './ivew/index.jsx'
import GetStart from './ivew/getStart.jsx'

const Basic = () => (
	<Router>
		<div>
			<Header />
			<div>
				<Route exact path='/' component={Home} />
				<Route path='/getStart' component={GetStart} />
			</div>			
		</div>
	</Router>
	)

export default Basic