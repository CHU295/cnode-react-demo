import React, { Component } from 'react'
import './index.scss'

class Code extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render () {
		return (
			<div className="panel">
			    <div className="header">
			      <span className="col_fade">扫一扫有惊喜</span>
			    </div>
			    <div className="inner my-code" style={{textAlign:'center'}}>			      
			      <img src={require('../../asset/img/code.jpg')}/>			      
			    </div>
			  </div>
		);
	}
}

export default Code