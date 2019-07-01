import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View} from 'react-native';

class Square extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{   
                            width: this.props.size,
                            height: this.props.size,
                            backgroundColor: this.props.color,
                        }} >
                        {this.props.c}
                        </View>
        );
    }
}
export default Square;



