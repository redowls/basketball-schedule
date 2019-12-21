import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {NavLink} from 'react-router-dom'
import $ from 'jquery'

export default class SideNav
extends React.Component{

    componentDidMount(){
        var idActive = this.props.idActive
        if(idActive == 4387){
            $('#nba').addClass('text-warning').removeClass('text-light')
        } else if ( idActive == 4516) {
            $('#wnba').addClass('text-warning').removeClass('text-light')
        } else if (idActive == 4549) {
            $('#fiba').addClass('text-warning').removeClass('text-light')
        } else if (idActive == 4388) {
            $('#nbag').addClass('text-warning').removeClass('text-light')
        } else if (idActive == 4547) {
            $('#euro').addClass('text-warning').removeClass('text-light')
        } else if (idActive == 4548) {
            $('#bcl').addClass('text-warning').removeClass('text-light')
        }
    }

    render(){
        return(
            <aside className="col-sm-2 bg-secondary is-fixed">
                <p><a className='text-light' id='nba' href="?id=4387">National Basketball Association</a></p>
                <p><a className='text-light' id='wnba' href="?id=4516">WNBA</a></p>
                <p><a className='text-light' id='fiba' href="?id=4549">FIBA Basketball World Cup</a></p>
                <p><a className='text-light' id='nbag' href="?id=4388">NBA G League</a></p>
                <p><a className='text-light' id='euro' href="?id=4547">EuroCup Basketball</a></p>
                <p><a className='text-light' id='bcl' href="?id=4548">Basketball Champions League</a></p>
            </aside>
        )
    }
}

