import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class Header extends Component {
	render () {
		return (
			<div className='header-contain'>
				<div className='navbar'>
					<a href='/' className='brand'>
						<img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"/>
					</a>
					<ul className="nav pull-right">
		        <li><Link to="/">首页</Link></li>		        
		        <li><Link to="/getstart">新手入门</Link></li>
		        <li><Link to="/api">API</Link></li>		        
		        <li><Link to="/about" target="">关于</Link></li>
		        <li><Link to="/signup">注册</Link></li>
		        <li><Link to="/signin">登录</Link></li>		        
		      </ul>
				</div>
			</div>
		);
	}
}

export default Header