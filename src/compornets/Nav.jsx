import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default class Nav

extends React.Component{

    componentDidMount(){
        
    }
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Events</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Teams?id=4387">Team</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

