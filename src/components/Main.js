import React from 'react';
import Card from './Card';
import '../css/App.css'
import Axios from 'axios';

class Main extends React.Component {

    constructor(){
      super();
      this.state={spaceData:[]};
      this.dateChange = this.dateChange.bind(this);
    }

    componentDidMount(){
      //initial api call for data
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=o2cSTyveBdiNPAf3yW9DIo4ClewjA4pxDjgLAPo6`)
        .then(response => {
          this.setState({
            spaceData: response.data,
            minText: (response.data.explanation.slice(0,100) +"...")
          })
        })
    }

    dateChange = (date) =>{
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=o2cSTyveBdiNPAf3yW9DIo4ClewjA4pxDjgLAPo6&date=${date}`)
        .then(response => {
          if(response.data.explanation === ""){
            this.setState({
              spaceData: response.data,
              minText: "Explanation unavailable for this date"
            })
          }else{
            this.setState({
              spaceData: response.data,
              minText: (response.data.explanation.slice(0,100) +"...")
            })
          }
        })
    }

    render(){
        return(
          <div>    
            <div className="py-4 bg-light">
              <div className="container">
                <Card data={this.state.spaceData} minText={this.state.minText} dateChange={this.dateChange}/>
              </div>
            </div>
          </div>
        )
    }      
}

export default Main;