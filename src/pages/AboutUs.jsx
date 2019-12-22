import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import $ from 'jquery'

class AboutUs extends React.Component{

    handleSubmit = (e) =>{
        e.preventDefault();
        alert('Thankyou for your feedback :) ' + $('#name').val())
        $('form').trigger("reset");
        $('form').trigger("change")
    }
    

    render(){
        return(
            <div className="container">
                <div className='row justify-content-center'>
                    <div className="col-8 embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.youtube.com/embed/8xOwS2mP4yg" className="embed-responsive-item" allowFullScreen frameBorder="0"></iframe>
                    </div>
                </div>
                <h3 className="mt-3">Make Us Better</h3>
                <form onSubmit={this.handleSubmit} autoComplete="off" className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" name="name" placeholder="Your name"/>
                    <label htmlFor="email" className="mt-3">Email</label>
                    <input type="text" name="email" className="form-control" id="email" placeholder="example@example.com"/>
                    <label htmlFor="subject" className="mt-3">Your Feedback</label>
                    <textarea name="subject" id="subject" cols="30" rows="10" placeholder="Your Feedback..." className="form-control"/>
                    <input type="submit" value="submit" id="sumbit" className="btn btn-primary btn-lg btn-block mt-3"/>
                </form>
                <p>&copy; Rian, Welly, Wisley</p>
            </div>
            
        )
    }
}

export default AboutUs