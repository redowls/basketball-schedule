import React from 'react'
export default class ListTeams


extends React.Component{

    render(){
        return(
            <div>
                <div className='row'>
                        <img src={this.props.teams.strTeamBadge} alt={this.props.teams.strTeam} className='col-2 img-thumbnail'></img>
                    <h5 className='align-self-center'>
                        {this.props.teams.strTeam}
                    </h5>
                </div>
            </div>
        )
    }
}