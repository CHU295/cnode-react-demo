import React, { Component } from 'react'
import './index.scss'

class page extends Component {
	constructor(props) {
		super()
		this.state = {
			number: 1,
		}
	}
	
	componentDidMount() {
		// console.log(this.props)
	}

	render () {
		return (
			<div className="pagination">
			  <ul>
			    <li style={{borderLeftWidth:'1px'}}>«</li>
			    <li>...</li>
			    <li onClick={()=>this.props.changePage('',4)}>1</li>
			    <li>2</li>
			    <li>3</li>
			    <li>4</li>
			    <li>5</li>
			    <li>...</li>
			    <li>»</li>
			  </ul>
			</div>
		);
	}
}

export default page