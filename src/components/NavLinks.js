import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavLinks extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/birds'>Brids</NavLink></li>
                </ul>
            </nav>
        );
    }
}