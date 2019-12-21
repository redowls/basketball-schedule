import React from 'react'
import Nav from '../compornets/Nav'
import "bootstrap/dist/css/bootstrap.min.css"
import SideNav from '../compornets/SideNav'
import queryString from 'query-string'
import ListTeams from '../compornets/ListTeams'

export default class Teams
extends React.Component{

    state = {
        teams : [],
        loading : true,
        params : 4387
    }

    componentWillMount(){
        let paramsChange
        let url = this.props.location.search
        if (url){
            paramsChange = queryString.parse(url)
            this.setState({
                params : paramsChange.id
            })
        }
    }

    componentDidMount(){
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id='+this.state.params)
        .then(res => res.json())
        .then(data => {
            console.log('data'+data)
            if(data.teams){
                this.setState({
                    teams : data.teams,
                    loading : false
                })
            } else {
                this.setState({
                    teams : undefined
                })
            }
        })
    }
    
    render(){
        if(!this.state.teams){
            return(
                <div>
                    <div className='container-fluid text-left'>
                        <div className='row content'>
                            <SideNav idActive={this.state.params}/>
                            <div className='col-sm-10 text-left'>
                                No Teams
                            </div>
                        </div>
                    </div>
                </div>
            )           
        } else{
            return(   
                <div>
                    <div className='container-fluid text-left'>
                        <div className='row content'>
                            <SideNav idActive={this.state.params}/>
                            <div className='col-sm-10 text-left'>
                                {
                                    this.state.loading ?
                                    <p>Fetching From API</p> :
                                    this.state.teams.map((team, index) =>(
                                        <div className='list-group' key={index}>
                                            <a href={`/TeamDetail/${this.state.teams[index].idTeam}`} className='list-group-item list-group-item-action'>
                                                <ListTeams teams = {team}/>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )   
        }
    }
}

