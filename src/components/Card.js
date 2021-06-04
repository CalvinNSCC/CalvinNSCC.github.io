import React, { useState } from 'react'
import '../css/App.css'

class Card extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {readMore: false};
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange = () =>{
      var currentDate = this.currentDate;
      this.props.dateChange(currentDate.value)
    }

    readMore = () =>{
      if(this.state.readMore){
        this.setState({readMore: false})
      }else{
          this.setState({readMore: true})
      }
    }

    render(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;

        return(
            <div>
              <h1 className='mx-auto'>{this.props.data.title}</h1>
              <div className="card mb-4 box-shadow">
                <img 
                  className="card-img-top mx-auto mt-4" 
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                  alt="Thumbnail [100%x225]" 
                  style={{height: "auto", width: "75%", display: 'block'}}
                    src={this.props.data.url} 
                  data-holder-rendered="true" />
                  <div className="card-body">
                    {this.state.readMore ? (
                      <p className="card-text">{this.props.data.explanation}</p>
                    ) : (
                      <p className="card-text">{this.props.minText}</p>
                    )}
                    
                    <div className="d-flex justify-content-between align-items-center">
                      {this.state.readMore ? (
                        <button type="button" className="btn btn-sm btn-danger" onClick={this.readMore}>Less info</button>
                      ): (
                        <button type="button" className="btn btn-sm btn-success" onClick={this.readMore}>More info</button>
                      )}
                    </div>
                    <p className = "mt-2 font-weight-bold">Enter the date you would like to see</p>
                    <div className = "d-inline-flex">
                      <input type="date" className="mr-4" max = {today} min = "1995-06-16" name = 'currentDate' ref={(c) => this.currentDate = c}></input>
                      <button type="button" className="btn btn-sm btn-info" onClick={this.onDateChange}>Submit</button>
                    </div>
                </div>  
            </div>
          </div>
        )
    }
}

export default Card;