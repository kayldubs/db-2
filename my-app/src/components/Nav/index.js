import { CardMedia } from '@mui/material';
import Logo from '../../assests/imgs/nav-header.svg';
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import  '../Nav/Nav.css'

 


class Nav extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav position="sticky" className='NavItems'>
                <a href="/" >
                <CardMedia className='navbar-logo'
                         component="img"
                         alt="Your logo."
                         image={Logo}
                         //onClick={handlePageChange}
                     >
                     </CardMedia>
                 </a>
                 <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.Cname} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}         
                </ul>
                
            </nav>
        )
    }
}

export default Nav; 