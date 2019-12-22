import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import facebook from '../image/facebook.jpg'
import twitter from '../image/twitter.jpg'
import instagram from '../image/instagram.jpg'
import youtube from '../image/youtube.jpg'

class TeamDetail extends React.Component{
    state = {
        params : "",
        teamDetail : undefined,
        loading : true
    }

    componentDidMount(){
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='+this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            if(data.teams){
                this.setState({
                    teamDetail : data.teams[0],
                    loading : false
                })
                this.render()
            } else {
                this.setState({
                    teamDetail : undefined
                })
            }
        })
    }

    render(){
        return(
            this.state.loading ?
            <p>Fetching From API</p> :
            <div>
                <h5 className="text-center">{this.state.teamDetail.strTeam}</h5>
                <div className = "row justify-content-center">
                    <div className="col-2">
                        <img src={this.state.teamDetail.strTeamBadge} className="img-thumbnail" alt={this.state.teamDetail.strTeam}/>
                    </div>
                </div>
                <p>{this.state.teamDetail.strDescriptionEN}</p>
                <div className='row'>
                    <div className='col-1'>
                        <a href={'https://'+this.state.teamDetail.strFacebook} target="_blank" rel="noopener noreferrer">
                            <img className='img-thumbnail' src={facebook} alt="facebook"/>
                        </a>
                    </div>
                    <div className='col-1'>
                        <a href={'https://'+this.state.teamDetail.strTwitter} target="_blank" rel="noopener noreferrer">
                            <img className='img-thumbnail' src={twitter} alt="Twitter"/>
                        </a>
                        
                    </div>
                    <div className='col-1'>
                        <a href={'https://'+this.state.teamDetail.strInstagram} target="_blank" rel="noopener noreferrer">
                            <img className='img-thumbnail' src={instagram} alt="instagram"/>
                        </a>                        
                    </div>
                    <div className='col-1'>
                        <a href={'https://'+this.state.teamDetail.strYoutube} target="_blank" rel="noopener noreferrer">
                            <img src={youtube} className='img-thumbnail' alt="youtube"/>
                        </a>
                    </div>
                </div>
                
            </div>
        )
        
    }
}

export default TeamDetail