import React, { Component } from 'react'
import './index.scss'

class NoBack extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [1,2,3],
		}
	}

	componentWillReceiveProps(nextProps) {
		let a = []
		nextProps.listData.map(lis=>{
			if (lis.reply_count==0 && a.length<=5) {
				a.push(lis)
			}
		})
		this.setState({
			listData: a,
		})
	}

	render () {
		return (
			<div className="panel">
			    <div className="header">
			      <span className="col_fade">无人回复的话题</span>
			    </div>
			    <div className="inner">			      
			      <ul className="unstyled">
			      	{this.state.listData.map((list,index)=>(
    		        <li key={index}>
    						  <div>
    						  	<a className="dark topic_title" href={'/topic/'+list.id} title={list.title}>{list.title}</a>
    						  </div>
    						</li>
			      	))
			      	}			        
			      </ul>			      
			    </div>
			  </div>
		);
	}
}

export default NoBack