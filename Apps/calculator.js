import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    TextInput,
    View
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Cal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            segmentSelectedIndex: 0,
            billAmount: '',
            result: 0,
            tipAmount: 0
        }
    }

    handleSegmentedChange(index) {
        this.setState({segmentSelectedIndex: index})

        this.handleBillAmountChange(this.state.billAmount, index)
    }

    computeBillAmount(bill, index) {
        if (!index && index != 0) {
            index = this.state.segmentSelectedIndex;
        }

        bill = parseFloat(bill);
        var percent = this.segmentValues()[index];
        percent = parseFloat(percent) / 100;

        var result = bill + (bill * percent);

        this.setState({
            result: result,
            tipAmount: bill * percent
        })
    }

    handleBillAmountChange(bill, index) {
        var reg = new RegExp('^[0-9.,]+$');
        var check = reg.test(bill);

        if (!check || bill.length == 0) {
            this.setState({billAmount: ''})
            this.computeBillAmount(0, index);
        } else {
            this.setState({billAmount: bill})
            this.computeBillAmount(bill, index);
        }
    }

    segmentValues() {
        return ["10%", "15%", "50%"];
    }

    render() {
        return (
            <View style={{marginLeft:10, marginRight:10}}>
                <View
                    style={{
                    height: 60,
                    width: 80
                }}></View>

                <View style={{
                    height: 60
                }}>
                    <Text
                        style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>Tip Calculator</Text>
                </View>

                <View
                    style={{
                    height: 40,
                    flexDirection: 'row'
                }}>
                    <Text
                        style={{
                        marginTop: 8,
                        flex: 1,
                        maxWidth: 110,
                        fontSize: 20
                    }}>Bill Amount</Text>
                    <TextInput
                        style={{paddingLeft:5,
                        flex: 1,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                        value={this.state.billAmount}
                        placeholder="Please only input numbers"
                        onChangeText={(billAmount) => this.handleBillAmountChange(billAmount)}
                        keyboardType='numeric'/>
                </View>

                <View
                    style={{
                    marginTop: 20,
                    height: 40
                }}>
                    <Text style={{
                        fontSize: 20
                    }}>Tip Amount {this.state.tipAmount}</Text>
                </View>

                <View>
                    <SegmentedControlTab
                        values={this.segmentValues()}
                        onTabPress={index => this.handleSegmentedChange(index)}/>
                </View>

                <View
                    style={{
                    marginTop: 20,
                    height: 70
                }}>
                    <Text style={{
                        fontSize: 15
                    }}>Bill Amount: {this.state.billAmount}</Text>
                    <Text style={{
                        fontSize: 15
                    }}>Tip Amount: {this.state.tipAmount}</Text>
                    <Text style={{
                        fontSize: 15
                    }}>Percent: {this.segmentValues()[this.state.segmentSelectedIndex]}</Text>
                </View>

                <View>
                    <Text
                        style={{
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}>Result : {this.state.result}</Text>
                </View>
            </View>
        )
    }
}

module.exports = Cal