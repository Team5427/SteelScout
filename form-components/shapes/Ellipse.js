import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Ellipse extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                width: this.props.w,
                height: this.props.h,
                borderRadius: this.props.w > this.props.h? this.props.w/2: this.props.h/2,
                backgroundColor: this.props.color,
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}
