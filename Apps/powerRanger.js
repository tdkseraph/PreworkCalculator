import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator, View,AsyncStorage} from 'react-native';

import Setting from "./settings.js";
import Calculator from "./calculator.js";
import CustomNavBar from "./customNavBar.js";
export default class PwrRang extends Component {
constructor(props){
        super(props);
        this.state ={
             sceneTransition :''
        }
    }
    // Render
    render() {
        return (<Navigator
            initialRoute={{id: 'CalculatorPage'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
             if (route.sceneConfig) {
                return route.sceneConfig;
             }
            return Navigator.SceneConfigs.FloatFromRight;
        }}
            navigationBar={CustomNavBar}
            configureScene={this.configureScene.bind(this)}/>);
    }

    // To navigate to page based on page ID
    renderScene(route, navigator) {
        switch(route.id){
            case "CalculatorPage":
            return<Calculator/>
            break;
            case "Setting":
            return <Setting/>
            break;
            default:
        }
    }

    // config scene transition, change scene transition based on Setting
    configureScene(route, routeStack) {
        //@Todo, change to scene transition from Asynstorage vale
        return Navigator.SceneConfigs.FloatFromRight;
    }
};

module.exports = PwrRang