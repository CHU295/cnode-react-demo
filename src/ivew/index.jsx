import React, { Component } from 'react'
import List from '../components/list/index.jsx'
import NoBack from '../components/list/noBack.jsx'
import Code from '../components/list/code.jsx'
import './index.scss'

class Chu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: []
		}
	}

	getListDate (val) {
		this.setState({
			listData: val
		})
	}

	render () {
		return (
			<div>
				<div className='contain'>
					<div className='right'>
						<NoBack listData={this.state.listData}/>
						<Code />
					</div>
					<div className='left'>
						<List getListDate={this.getListDate.bind(this)}/>
					</div>
					
				</div>
			</div>			
		);
	}
}

export default Chu