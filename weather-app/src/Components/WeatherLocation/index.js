import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../Services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from '../../Services/getUrlWeatherByCity';
import './WeatherData/styles.css';

class WeatherLocation extends Component{
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }
    
    componentDidMount() {
        this.hanldeUpdateClick();
    }
    
    hanldeUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    } 

    render(){
        const{weatherLocacionClick} = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={weatherLocacionClick}>
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData> 
                    : 
                    <CircularProgress/>}
            </div>
        )
    }
    
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    weatherLocacionClick: PropTypes.func,
}

export default WeatherLocation;