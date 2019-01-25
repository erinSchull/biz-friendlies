import React, {Component } from 'react';
import {Link} from 'react-router-dom';

import logo from './../../media/logo.png';
import './header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <Link to='/' >
                    <div className='branding'>
                        <img src={logo} alt='logo rainbow heart' className='logo' />
                        <h3 className='site-name' >LGBT Friendlies</h3>
                    </div>
                </Link>
                <Link to='/featured'> 
                    <h4> Featured</h4>
                </Link>
               <Link to='/submit'> 
                    <h4>Submission</h4>
               </Link>
               <Link to='/about'>
                    <h4> About</h4>
               </Link>
                <h4> Page 4</h4>
            </header>
        )
    }
}

export default Header