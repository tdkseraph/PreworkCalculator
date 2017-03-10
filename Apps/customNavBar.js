import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    stylesCSS,
    Navigator,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Setting from "./settings.js";

var NavigationBarRouteMapper = {
    LeftButton: (route, navigator, index, navState) => {
        return
    },
    RightButton: (route, navigator, index, navState) => {
        if (route.id != 'CalculatorPage') {
            return (
                <TouchableOpacity onPress={() => navigator.pop()}>
                    <Text>Save</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity 
             onPress={() => navigator.push({id: 'Setting'})}>
                    <Text style={{paddingRight:10}} >Setting</Text>
                </TouchableOpacity>
            );
        }
    },
    Title: (route, navigator, index, navState) => {
        return;
    }
}

module.exports = (<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper}/>)