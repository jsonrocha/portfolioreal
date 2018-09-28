import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
            <ol>
            <li>
            <Link to="">
            <i className="fa fa-linkedin"></i>
            </Link>
            </li>
            <li>
            <Link to="">
            <i className="fa fa-github"></i>
            </Link>
            </li>
            </ol>
            <ol>
            <li>
            <Link to="">
            ABOUT
            </Link>
            </li>
            <li>
            <Link to="">
            PROJECTS
            </Link>
            </li>
            <li>
            <Link to="">
            BLOGS
            </Link>
            </li>
            <li>
            <Link to="">
            RESUME
            </Link>
            </li>
            </ol>
            </nav>
        );
    }
}

export default NavBar;
