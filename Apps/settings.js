import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, Picker, View,AsyncStorage} from 'react-native';

export default class Set extends Component {

 constructor(props){
        super(props);
        this.state ={
            sceneTransition :''
        }
    }

    // action to set select value to AsyncStorage
    setSelectSceneTransition(scene) {
        try {
            this.setSceneTransition(scene);
            this.setState({scene: scene});
        } catch (error) {
            console.log("Oop!! Something went wrong 1 !!!" + error);
        }
    }

    // set data to AsyncStorage
    async setSceneTransition(scene) {
        try {
            await AsyncStorage.setItem('SCENE_SELECTED', scene);
            this.setState({sceneTransition: scene})
        } catch (error) {
            console.log("Hmm, something when wrong when set data 1..." + error);
        }
    }

    // get data to AsyncStorage
    async getSceneTransition() {
        try {
            let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
            // Store value to State
            this.setState({sceneTransition: sceneTransitionValue});
        } catch (error) {
            console.log("Hmm, something when wrong when get data 2..." + error);
        }
    }

    // this method will be called when scene loaded
    componentDidMount() {
        this.getSceneTransition();
    }

    render() {
        return (
            <View
                style={{
                marginTop: 50,
                padding: 10
            }}>
                <View>
                    <Text style={{
                        fontSize: 25,textAlign:"center"
                    }}>Scene Transitions</Text>
                    <Picker
                        selectedValue={this.state.sceneTransition}
                        onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
                        <Picker.Item label="FloatFromRight" value="FloatFromRight"/>
                        <Picker.Item label="FloatFromLeft" value="FloatFromLeft"/>
                        <Picker.Item label="FloatFromBottom" value="FloatFromBottom"/>
                        <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid"/>
                        <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft"/>
                        <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump"/>
                        <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight"/>
                    </Picker>
                </View>
            </View>
        )
    }
};

module.exports = Set