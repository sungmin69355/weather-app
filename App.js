import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import Weather from './app/Weather'
import * as Location from 'expo-location';
import { render } from 'react-dom';

const API_KEY ="6dbb60dffb7e500a2514c879a801a10a"

   
export default class App extends React.Component {
  
  componentDidMount( ){
    this._getWeather() 
  }

  _getWeather = async() =>{
    await Location.requestPermissionsAsync() //위치정보 권한요청을 하는 함수입니다
    const _location = await Location.getCurrentPositionAsync() //현재 위치를 가져와서 _location에 저장합니다
    console.log(_location) // 저장된 _location을 확인해보기 위해서 console.log()를 찍어봅시다
    const {coords :{latitude,longitude}} = _location 
    const _response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${latitude}&APPID=${API_KEY}&units=metric`)
    const _json = await _response.json()
    this.setState({isLoaded: true, temp: Math.floor(_json.main.temp), title : _json.weather[0].main})
  }

  constructor(props){
    super(props);
    this.state={
    isLoaded : false,
    }

  }
    
  render(){
  return (
    <View style = {styles.main}>
    {this.state.isLoaded ? <Weather title={this.state.title} temp = {this.state.temp} />:
    <ActivityIndicator style={styles.indicator} color="white" size="large"/>}
    </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator:{
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    },
    
});
