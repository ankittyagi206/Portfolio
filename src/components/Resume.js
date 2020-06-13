import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

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
			<a style={{color:'blue'}} href="https://www.linkedin.com/in/ankit-tyagi-4a1535168/" target="_blank" rel="noopener noreferrer" >https://www.linkedin.com/in/ankit-tyagi-4a1535168/</a>
			
		</Cell>


		<Cell  className="resume-right-col"col={8}>
		<h2>Education</h2>



		<Education 
		startYear={2015}
		endYear={2019}
		schoolName={"SRM University"}
		schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		/>

		<Education 
		startYear={2015}
		endYear={2019}
		schoolName={"SRM University"}
		schoolDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		/>


		<hr style={{borderTop:'3px solid #e22947'}}/>

		<h2>Experience</h2>
		<Experience  
		startYear={2019}
		endYear={2020}
		jobName={"Piramal Foundation"}
		jobDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		/>
			<Experience  
		startYear={2020}
		endYear={2023}
		jobName={"Tata Consultancy Services"}
		jobDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		/>

			<hr style={{borderTop:'3px solid #e22947'}}/>
			<h2>Skills</h2>
			<Skills 
			skill="javascript"
			progress= {100}
			/>

			<Skills 
			skill="Html/Css"
			progress= {70}
			/>

			<Skills 
			skill="React"
			progress= {25}
			/>

			<Skills 
			skill="javascript"
			progress= {100}
			/>

		</Cell>


	</Grid>	
		</div>)


};
}
export default Resume;