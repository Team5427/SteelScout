import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Triangle extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderLeftWidth: this.props.lw,
                borderRightWidth: this.props.rw,
                borderBottomWidth: this.props.h,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: this.props.color,
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}

