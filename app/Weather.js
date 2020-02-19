import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({temp,title}) {
    weather = {
        Thunderstorm: {
        icon: 'weather-lightning-rainy',
        backcolor: ['#e9d362', '#333333'],
        },
        Drizzle: {
        icon: 'weather-hail',
        backcolor: ['#005AA7', '#FFFDE4'],
        },
        Rain: {
        icon: 'weather-pouring',
        backcolor: ['#3a7bd5', '#3a6073'],
        },
        Snow: {
        icon: 'weather- snowy',
        backcolor: ['#FFEFBA', '#FFFFFF'],
        },
        Mist: {
        icon: 'weather-fog',
        backcolor: ['#1c92d2', '#f2fcfe'],
        },
        Clear: {
        icon: 'weather-sunny',
        backcolor: ['#CAC531', '#F3F9A7'],
        },
        Clouds: {
        icon: 'weather-cloudy',
        backcolor: ['#bdc3c7', '#2c3e50'],
        },
    }    
    return(
    <LinearGradient
        colors={this.weather[title].backcolor}
        style={styles.weatherback}>
        <View style={StyleSheet.weatherback}>
        <Text style={StyleSheet.icon}>
        <MaterialCommunityIcons name={this.weather[title].icon} size={200} />
        </Text>
        </View>
        <View style={styles.textroom}>
            <Text style={styles.textcustom}>
            {title}
            </Text>
        <Text style={styles.textcustom}>
            {temp}℃
        </Text>
        </View>    
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    weatherback:{
        flex:1
    },
    textroom:{
        flex:1,
        alignItems: "flex-end",
        paddingRight:70,
    },
    textcustom:{
        fontSize:50,
        color: 'white',
    },
    icon:{
        color: 'white',
        }
        
});