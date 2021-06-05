import React, { useState } from 'react'
import '../css/App.css'

class Card extends React.Component{
    
    constructor(props){
      super(props);
      this.state = {};
      this.onDateChange = this.onDateChange.bind(this);
    }

    componentDidMount = () =>{
      var today = new Date();
      this.setState({
        readMore: false,
        date: today.toISOString().slice(0,10)
      })
    }

    onDateChange = () =>{
      this.setState({
        date: this.currentDate.value
      })
      this.props.dateChange(this.currentDate.value)
    }

    getPrevDay = () =>{
      //https://stackoverflow.com/questions/1296358/how-to-subtract-days-from-a-plain-date
      //turn the currentDate.value into a date object and substract a day or add a day

      var dateOffset = (24*60*60*1000);
      var chosenDate = new Date(this.state.date);
      var dateCheck = new Date();


      console.log(chosenDate.toISOString().slice(0,10))
      chosenDate.setTime(chosenDate.getTime() - dateOffset)
      
      if(chosenDate < dateCheck){
        chosenDate = this.state.date
        alert("Unable to retrieve data from the past. I haven't invented time travel yet.")
      }else{
        chosenDate = chosenDate.toISOString().slice(0,10)
      }

      this.setState({date: chosenDate})
      this.props.dateChange(chosenDate)
    }

    getNextDay = () =>{
      var dateOffset = (24*60*60*1000);
      var chosenDate = new Date(this.state.date);
      var dateCheck = new Date();
    
      chosenDate.setTime(chosenDate.getTime() + dateOffset)
      if(chosenDate > dateCheck){
        chosenDate = dateCheck
        alert("Unable to retrieve data from the future. I haven't invented time travel yet.")
      }
      
      chosenDate = chosenDate.toISOString().slice(0,10)
      this.setState({date: chosenDate})
      this.props.dateChange(chosenDate)
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
              <h1 className='mx-auto' id = "title">{this.props.data.title}</h1>
              <div className="card mb-4 box-shadow">
                {this.props.data.media_type === "image" ? (
                    <img 
                  className="card-img-top mx-auto mt-4" 
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                  alt="Thumbnail [100%x225]" 
                  style={{height: "auto", width: "75%", display: 'block'}}
                    src={this.props.data.url} 
                  data-holder-rendered="true" />
                ) : (
                  <div className = "embed-responsive embed-responsive-16by9">
                    <iframe title={this.props.data.title} width = "800" height = "480" src = {this.props.data.url}></iframe>
                  </div>
                )}
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
                    <div className = "d-flex py-3 justify-content-between">
                      <button className='btn btn-sm btn-outline-secondary' onClick={this.getPrevDay}>Previous day</button>
                      <button className='btn btn-sm btn-outline-secondary' onClick={this.getNextDay}>Next day</button>
                    </div>
                </div>  
            </div>
          </div>
        )
    }
}

export default Card;