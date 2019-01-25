import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Submission extends Component {
    render() {
        return(
            <div>
                <h2> Submission Page</h2>
                
                <h3>What are you submitting?</h3>

                <Link to='/services' >
                <p>Location for Services</p>
                </Link> 
                <h4>Or</h4>
                <p>Location for Bathrooms</p>
            </div>
        )
    }
}
export default Submission