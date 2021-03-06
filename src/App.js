import React from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main' ;
function App() {
  return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-clr" title={<Link style={{textDecoration:'none',color:'white'}} to="/">MY PORTFOLIO</Link>} scroll>

            <Navigation>
               
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              
            </Navigation>
        </Header>
        <Drawer  title={<Link style={{textDecoration:'none',color:'Black'}}  to="/">MY PORTFOLIO</Link>}>
            <Navigation>
                
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
             
            </Navigation>
        </Drawer>
        <Content>
           <Main/>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default App;
