import React, { Component } from 'react';
import LocationList from './Components/LocationList';
import './App.css';

const cities = [
  "Colima,MX",
  "Barcelona,Es",
  "Colombia"
];

class App extends Component {
  hanleSelectionLocation = city =>{
    console.log(`hanleSelectionLocation ${city}`);
  }
  render() {
    return (
      <div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.hanleSelectionLocation}
        ></LocationList>
      </div>
    );
  }
}

export default App;
