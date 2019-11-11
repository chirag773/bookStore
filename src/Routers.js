import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from "react-native-router-flux";
import Addbooks from "../src/component/AddBooks"
import Home from "./component/Home"

class RouterComponent extends Component {
  
  render() {
    return (
      <Router>
          <Scene key="root" >
            {/* <Scene key="login" component={LoginForm} title="Log In" /> */}
            
            {/* left={()=>null} is use to disable back button */}
            {/* <Scene 
            key="employeeList" 
            component={Home} 
            title="Employes" 
            left={()=>null}
            rightTitle="Add"
            onRight={()=>Actions.employeCreate()}
            />  */}

            <Scene key="home" component={Home} title="Add Books" />
            {/* <Scene key="employeeEdit" component={EmployeEdit} title="Edit Employee" /> */}
          </Scene>
          
      </Router>
    );
  }
}

export default RouterComponent;
