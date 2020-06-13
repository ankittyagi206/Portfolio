import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';

class Resume extends Component{
render(){
return(
	<div>
	<Grid>
		<Cell col={4}> 
			<div style={{textAlign:'center'}}>
				<img 
				  src="/logo.png"
				  alt="avatar"
				  style={{height:'200px'}}
				  />
			</div>

			<h2 style={{paddingTop:'1em'}}> Ankit Tyagi</h2>
			<h4 style={{color:'grey'}}>Programmer</h4>
			<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/ >
			<p>To work for a progressive organization in a highly motivating and challenging
				environment that provides the best opportunities to grow and utilize my potentials completely</p>
			<hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/ >
			<h5>Address</h5>
			<p>House no.-250, Sector-4 Shastri Nagar Meerut, U.P</p>
			<h5>Mobile No.</h5>
			<p>+91 8755305989 ,+91 7906355348</p>
			<h5>Email</h5>
			<p>tyagiankit370@gmail.com</p>
			<h5>linkedin</h5>
			<Link teargt="_blank" to="https://www.linkedin.com/in/ankit-tyagi-4a1535168/">https://www.linkedin.com/in/ankit-tyagi-4a1535168/</Link>
		</Cell>


		<Cell  className="resume-right-col"col={8}>
		<h2>Education</h2>
		<Education/>

		</Cell>
	</Grid>	
		</div>)


};
}
export default Resume;