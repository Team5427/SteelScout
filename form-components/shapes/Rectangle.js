import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Rectangle extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                            width: this.props.w,
                            height: this.props.h,
                            backgroundColor: this.props.color,
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}

