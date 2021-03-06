import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from './kauser.jpg'


class Landing extends Component {
    render() {
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src={profilepic}
                alt="Profilepic"
                className="avatar-img"
                />
  
              <div className="banner-text">
                <h1>Kauser Ahmed</h1>
              <hr/>
            <p>Software Developer</p>
  
          <div className="social-links">
  
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/kauser-ahmed-473888116/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="https://github.com/kauserahmed" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
  
            {/* Instgram */}
            <a href="https://www.instagram.com/kauser_ahmed/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
  
            {/* Facebook */}
            <a href="https://www.facebook.com/kauser.ahmed.220" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
  
          </div>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  
  export default Landing;