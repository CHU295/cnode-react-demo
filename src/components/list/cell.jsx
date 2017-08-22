import React, { Component } from 'react'
import './index.scss'

class cell extends Component {
	constructor(props) {
		super()
	}
	
	componentDidMount() {
		// console.log(this.props)
	}

	render () {
		return (
			<div className='cell'>
				  <a className="user_avatar pull-left" href="/user/i5ting">
				    <img src={this.props.data.author.avatar_url} title={this.props.data.author.loginname}/>
				  </a>

				  <span className="reply_count pull-left">
				    <span className="count_of_replies" title="回复数">
				      {this.props.data.reply_count}
				    </span>
				    <span className="count_seperator">/</span>
				    <span className="count_of_visits" title="点击数">
				      {this.props.data.visit_count}
				    </span>
				  </span>
				  
				  <a className="last_time pull-right" href="/topic/597edd7f8f0313ff0d08d97a#59919079ee602e88524b422e">
				    <span className="last_active_time">4 天前</span>
				  </a>

				  <div className="topic_title_wrapper">

				    
				<span className={(this.props.data.top || this.props.data.tab == 'good')?"put_top":"topiclist-tab"}>
					{this.props.data.top?'置顶':(
						this.props.data.tab == 'share'?'分享':(
							this.props.data.tab == 'good'?'精华':(
								this.props.data.tab == 'ask'?'问答':(
									this.props.data.tab == 'job'?'招聘':(
										this.props.data.tab == 'dev'?'客户端测试':'其它'
										)
									)
								)
							)
						)
				}
				</span>
				    <a className="topic_title" href={'https://cnodejs.org/topic/'+this.props.data.id} title={this.props.data.title}>
				      {this.props.data.title}
				    </a>
				  </div>
			</div>
		);
	}
}

export default cell