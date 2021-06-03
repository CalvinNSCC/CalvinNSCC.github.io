import React from 'react'
import '../css/App.css'

class Card extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){


        return(
            <div className="col-md-4">
                <h1>{this.props.data.title}</h1>
            <div className="card mb-4 box-shadow">
              <img 
                className="card-img-top" 
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                alt="Thumbnail [100%x225]" 
                style={{height: "auto", width: '100%', display: 'block'}}
                  src={this.props.data.url} 
                data-holder-rendered="true" />
              <div className="card-body">
                <p className="card-text">{this.props.data.explanation}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-primary">More info</button>
                      <button type="button" className="btn btn-sm btn-secondary" onClick = {this.editEntry}>Edit</button>
                      <button type="button" className="btn btn-sm btn-danger" onClick = {this.deleteEntry}>Delete</button>
                  </div>
                  <small className="text-muted"></small>
                </div>
              </div>  
            </div>
          </div>
        )
    }
}

export default Card;