import React, { Component } from 'react'
import './index.scss'

class Header extends Component {
	render () {
		return (
			<div className='header-contain'>
				<div className='navbar'>
					<a href='/' className='brand'>
						<img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"/>
					</a>
				</div>
			</div>
		);
	}
}

export default Header