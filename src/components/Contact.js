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
				src="/pro.png" 
				alt="profile"
				style={{height:'300px', paddingTop:'0px'}}
				/>
				<p style={{ width:'75%',margin:'auto',paddingTop:'0'}}>Are you working on something great? I would love to help make it happen! Call me or drop me a Mail and start your project right now! Just do it. </p>
				

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

/*
Hi! I'm Ankit Tygai. I am a Mechanical Engineer.I am Self-motivated and a quick learner. I love to explore new
things.I am currently work as an Assistant System Engineer in TATA Consultancy Services.I want to know how may i help your project.Check out my Resume and projects. <br/>I believe in:<br/>“ THINK POSITIVE & FIND FUEL IN FAILURE” */