import React from 'react'
import ListEvents from '../compornets/ListEvents'
import "bootstrap/dist/css/bootstrap.min.css"

class EventDetail extends React.Component{
    state = {
        eventDetail : undefined,
        params : "",
        loading : true
    }

    componentDidMount(){
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id='+this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            if(data.events){
                this.setState({
                    eventDetail : data.events[0],
                    loading : false
                })
                this.render()
            } else {
                this.setState({
                    eventDetail : undefined
                })
            }
        })
    }

    render(){
        const eventDetail = this.state.eventDetail
        return(
            <div>
                {
                    this.state.loading ?
                    <p>Fetching From API</p> :
                    <div className='container'>
                        <h3 className='text-center'>{eventDetail.dateEventLocal} {eventDetail.strTimeLocal}</h3>
                        <div>
                            <ListEvents events={eventDetail}/>
                        </div>
                        <div className="row">
                            <div className='col-5 align-self-center text-left'>
                                <h5>{eventDetail.intHomeScore}</h5>
                            </div>
                            <div className='col-2 align-self-center text-center'>
                                <p>Score</p>
                            </div>
                            <div className='col-5 align-self-center text-right'>
                                <h5>{eventDetail.intAwayScore}</h5>
                            </div>
                        </div>
                        <div>
                            <a href='`{state}`'></a>
                        </div>
                    </div>
                    
                }
                
                
            </div>
            
            
        )
        }
    
}

export default EventDetail