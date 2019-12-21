import React from 'react'
export default class ListEvents


extends React.Component{
    state = {
        homeImg : "",
        awayImg : ""
    }

    componentDidMount(){
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='+this.props.events.strHomeTeam)
        .then(res => res.json())
        .then(data => {
            this.setState({
                homeImg : data.teams[0].strTeamBadge
            })
        })
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t='+this.props.events.strAwayTeam)
        .then(res => res.json())
        .then(data => {
            this.setState({
                awayImg : data.teams[0].strTeamBadge
            })
        })
    }

    render(){
        return(
            <div>
                <div className='row'>
                    <div className='col-2 align-self-center text-left'>
                        <img src={this.state.homeImg} alt={this.props.events.strHomeTeam} className='img-thumbnail'></img>
                    </div>
                    
                    <h5 className='col-3 align-self-center'>
                        {this.props.events.strHomeTeam}
                    </h5>
                    <div className='col-2 align-self-center text-center'>
                        VS
                    </div>
                    <h5 className='col-3 align-self-center text-right' id='text'>
                        {this.props.events.strAwayTeam}
                    </h5>
                    <div className='col-2 align-self-center'>
                        <img src={this.state.awayImg} alt={this.props.events.strAwayTeam} className='img-thumbnail'/>
                    </div>
                </div>
            </div>
        )
    }
}