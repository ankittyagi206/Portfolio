import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landingpage extends Component{
render(){
return(
		<div style={{width:'100%' , margin:'auto'}}>
		<Grid className="landing-grid">
			<Cell col={12}>
			<img src="/image.png" alt="Avatar" className="avatar-img"/>

			<div className="banner-text">
			<h1> Web Developer</h1>
			<hr/>
			<p> HTML/CSS | JavaScript | React js| White Board Animations</p>
			<div className="social-links">

			<a href="https://www.linkedin.com/in/ankit-tyagi-4a1535168/" target="_blank" rel="noopener noreferrer" > <i className="fa fa-linkedin-square"  aria-hidden="true" /></a>
			

			<a href="https://github.com/ankittyagi206" target="_blank" rel="noopener noreferrer" > <i className="fa fa-github-square"  aria-hidden="true" /></a>


			<a href="https://www.instagram.com/tyagi._.ankit/" target="_blank" rel="noopener noreferrer" > <i className="fa fa-instagram"  aria-hidden="true" /></a>
			</div>
			</div>
			</Cell>
		</Grid> 
		</div>
)


}
};
export default Landingpage;