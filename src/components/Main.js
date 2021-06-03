import React from 'react';
import Card from './Card';
import '../css/App.css'
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Main extends React.Component {


    state = {
        spaceData: []
    };

    componentDidMount(){
      //initial api call for data
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=o2cSTyveBdiNPAf3yW9DIo4ClewjA4pxDjgLAPo6`)
        .then(response => {
          this.setState({
              spaceData: response.data
            })
        }
      )
    }


    render(){
        return(
          <div>    
            <div className="album py-5 bg-light">
              <div className="container">
                <Card data={this.state.spaceData}/>
              </div>
            </div>
          </div>
        )
    }      
}

export default Main;