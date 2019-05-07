import React from 'react';
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities, onSelectedLocation}) => {

    const hanleweatherLocacionClick = city =>{
        console.log("hanleweatherLocacionClick");
        onSelectedLocation(city);
    }
    const arrayComponents = cities => 
    (
        cities.map( 
            (city, index) => 
                <WeatherLocation 
                    key={index} 
                    city={city}>
                    weatherLocacionClick={() => hanleweatherLocacionClick(city)}
                </WeatherLocation>)
    );
    return (
    <div>   
        {arrayComponents(cities)}
    </div>
)}; 
    LocationList.porpTypes={
        cities: PropTypes.array.isRequired,
        onSelectedLocation: PropTypes.func,
    };

export default LocationList;