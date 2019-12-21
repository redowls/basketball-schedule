import React from 'react'
import ListEvents from '../compornets/ListEvents'
import "bootstrap/dist/css/bootstrap.min.css"
import queryString from 'query-string'
import SideNav from '../compornets/SideNav'

class Events extends React.Component{
    state = {
        events : [],
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
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id='+this.state.params)
        .then(res => res.json())
        .then(data => {
            if(data.events){
                this.setState({
                    events : data.events,
                    loading : false
                })
            } else {
                this.setState({
                    events : undefined
                })
            }
        })
    }

    render(){
        if(!this.state.events){
            return(
                <div>
                    <div className='container-fluid text-left'>
                        <div className='row content'>
                            <SideNav idActive={this.state.params}/>
                            <div className='col-sm-10 text-left'>
                                No Events
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
                                this.state.events.map((event, index) =>(
                                    <div className='list-group' key={index}>
                                        <a href={`/EventDetail/${this.state.events[index].idEvent}`} className='list-group-item list-group-item-action'>
                                            <ListEvents events = {event}/>
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

export default Events