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
		let i = [1,2,3,4,5]
		return (
			<div className="pagination">
			  <ul>
			    <li 
			    style={this.props.pageNum==1?{pointerEvents:'none',borderLeftWidth:'1px'}:{borderLeftWidth:'1px'}}
			    onClick={()=>this.props.changePage('',(this.props.pageNum-1))}
			    >«</li>
			    {
			    	this.props.pageNum == 1 ?
				    	(
				    		i.map(num=>(
				    				    		<li key={num} 
				    				    		onClick={()=>this.props.changePage('',(this.props.pageNum+num-1))} 
				    				    		style={(this.props.pageNum+num-1)==1?{color:'#80bd01'}:{}}>
				    				    		{this.props.pageNum+num-1}</li>
				    				    	)
				    		)):this.props.pageNum == 2 ?
						    		(
						    			
						    			i.map(num=>(
						    				    		<li key={num} 
						    				    		onClick={()=>this.props.changePage('',(this.props.pageNum+num-2))}
						    				    		style={(this.props.pageNum+num-2)==2?{color:'#80bd01'}:{}}
						    				    		>
						    				    		{this.props.pageNum+num-2}</li>
						    				    	)
						    		)):(
						    					
						    					i.map(num=>(
						    						    		<li key={num} 
						    						    		onClick={()=>this.props.changePage('',(this.props.pageNum+num-3))}
						    						    		style={(this.props.pageNum+num-3)==this.props.pageNum?{color:'#80bd01'}:{}}
						    						    		>
						    						    		{this.props.pageNum+num-3}</li>
						    						    	)
						    				))
			    }
			    <li>...</li>
			    <li 
			    onClick={()=>this.props.changePage('',(this.props.pageNum+1))}			    
			    >»</li>
			  </ul>
			</div>
		);
	}
}

export default page