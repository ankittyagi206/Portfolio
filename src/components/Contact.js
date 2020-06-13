import React,{Component} from 'react';
import {Grid,Cell,List,ListItemContent,ListItem} from 'react-mdl';

class Contact extends Component{
render(){
return(
		<div className="contact-body">
			<Grid className="contact-grid">
				<Cell col={6}>

				<h2>Ankit Tyagi</h2>
				<img 
				src="/profile.png" 
				alt="profile"
				style={{height:'300px', paddingTop:'0px'}}
				/>
				<p style={{ width:'75%',margin:'auto',paddingTop:'0'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>


				</Cell>
				<Cell col={6}>
					<h2> Contact Me</h2>
					<hr/>
					<div className="contact-list">


					<List>
					  <ListItem>
					    <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
					    <i className="fa fa-phone-square" aria-hidden="true"/>
					    +91 875505989 </ListItemContent>
					  </ListItem>
					  

					    <ListItem>
					    <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
					    <i className="fa fa-skype" aria-hidden="true"/>
					    My Skype id </ListItemContent>
					  </ListItem>
					  

					    <ListItem>
					    <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
					    <i className="fa fa-envelope" aria-hidden="true"/>
					    tyagiankit370@gmail.com</ListItemContent>
					  </ListItem>
					  

					    <ListItem>
					    <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
					    <i className="fa fa-fax" aria-hidden="true"/>
					    +91 875505989 </ListItemContent>
					  </ListItem>
					  
					</List>

					</div>
					

				</Cell>
			</Grid>
		</div>

		)


};
}
export default Contact;