import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landingpage from './Landingpage';
import Aboutpage from './Aboutpage';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';


const Main = () =>(

	
				<Switch>
					<Route path="/" exact component={ Landingpage } /> 
					<Route path="/about"  component={ Aboutpage } /> 
					<Route path="/resume"  component={ Resume } />
					<Route path="/projects" component={ Project }/>
					<Route path="/contact"  component={ Contact } /> 
				</Switch>

	
)

export default Main;