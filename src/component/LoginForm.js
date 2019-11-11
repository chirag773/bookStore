import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View ,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
    } from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome';


class LoginForm extends React.Component {


    static navigationOptions = {
        header:null
    }

  constructor(props) {
    super(props);
 
   this.state = {
       email: "",
       passWord: ""
      };
    }

  
    
  render() {
    return (      
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.loginText}>L O G I N</Text>
          </View>
            <View>
              <Icons name="user" size={28}
                style={styles.InputIcons}
              />
              <TextInput style={styles.textInput} 
                        placeholder="Email"
                        placeholderTextColor="black"
                        underlineColorAndroid="rgba(0,0,0,0)" 
                        // autoFocus={true}
                        onSubmitEditing={()=>this.password.focus()} 
                        keyboardType="email-address"  
              />
            </View>
            <View>
              <Icons name="lock" size={28}
                style={styles.InputIcons}
              />
              <TextInput style={styles.textInput} 
                          placeholder="Password"
                          placeholderTextColor="black"
                          secureTextEntry={true}
                          underlineColorAndroid="rgba(0,0,0,0)"
                          ref={(input)=>this.password = input}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate("AllBooks")}>
              <Text style={styles.buttonText}>
                  Login 
              </Text>    
            </TouchableOpacity>
            <View style={styles.signuptextcont}>
              <Text style={styles.signuptext}>
                Don't have an account yet? 
              </Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignupForm")}> 
                <Text style={styles.signupbutton}> SignUp</Text>
              </TouchableOpacity>
            </View>
       </KeyboardAvoidingView>
    );
  }
}
export default LoginForm
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(44, 111, 148)',    
    justifyContent: 'center',
  },
  top:{
    alignItems: 'center',
    
  },
  loginText:{
    color:"black",
    fontSize: 28,
    paddingLeft: 40,
    paddingRight: 40,
    
  },
  InputIcons:{
    position:"absolute",
    marginTop: 21,
    left:15,
    elevation:1
  },
  textInput:{
      width:340,
      marginTop: 10,
      fontSize:15,
      height:50,
      borderRadius: 30,
      paddingLeft: 50,
      backgroundColor:'rgb(44, 144, 174))'
  },
  button:{
    width:340,
    backgroundColor: "black",
    marginVertical: 10,
    paddingVertical: 16,
    borderRadius: 30,
  },
  buttonText:{
      fontSize:16,
      fontWeight:"500",
      textAlign:"center",
      color:"white"
      
  },
  signuptextcont:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  signuptext:{
    fontSize: 15,
    color:"#2C3E50",
  },
  signupbutton:{
    fontWeight:"500"
  }
});