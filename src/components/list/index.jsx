import React, { Component } from 'react'
import axios from 'axios'
import Cell from './cell.jsx'
import Page from '../page/index.jsx'
import './index.scss'

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			tab: '',
			number: 1,
		}
	}
	
	changePage(tab,number) {
		this.setState({
				tab:tab,
				number:number
			})
		this.getList()
	}

	componentDidUpdate (a,b) {
		console.log(a,b)
		// if (a.number!=b.number) {
		// 	this.getList()
		// }
	}

	getList() {
		axios.get('https://cnodejs.org/api/v1/topics?tab='+this.state.tab+'&page='+this.state.number).then(res=>{
			this.setState({
				list:res.data.data
			})
			this.props.getListDate(res.data.data)
		})
	}

	componentDidMount() {
		this.getList()
	}
	render () {
		return (
			<div className='list'>
				<div className='list-head'>
					<span>全部</span>
					<span>精华</span>
					<span>分享</span>
					<span>回答</span>
					<span>招聘</span>
					<span>客户端测试</span>
				</div>
				<div className='part-contain'>
					{this.state.list.map(part=>(
						<Cell data={part} key={part.id}/>
					))
					}
				</div>
				<Page changePage={this.changePage.bind(this)} pageNum={this.state.number}/>
			</div>
		);
	}
}

export default List