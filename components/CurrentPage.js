import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import Startup from './Startup';
import SignUp from './SignUp';
import ForgotCredentials from './ForgotCredentials';
import ScoutDashboard from'./ScoutDashboard';
import { connect } from 'react-redux';
import {changeCurPage} from '../actions/actions.js';
import {bindActionCreators} from 'redux';


class CurrentPage extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
      this.props.changeCurPage("Startup");
  }
  render() {
    return (
        this.props.curPage == "Startup"? <Startup/>:
        this.props.curPage == "Login"? <Login/>:
        this.props.curPage == "SignUp"?<SignUp/>:
        this.props.curPage == "ForgotPass"?<ForgotCredentials/>:
        this.props.curPage == "ScoutDashboard"?<ScoutDashboard/>:
        <Startup/>
    );
  }
}
    
function mapStateToProps(state){
    return{
        // username: state.auth.username,
        // password: state.auth.password,
        curPage: state.curPage,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeCurPage: changeCurPage}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CurrentPage);
