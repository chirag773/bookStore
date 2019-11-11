import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View ,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
    } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';


class SignupForm extends React.Component {

    static navigationOptions = {
        header:null
    }

    state = {
      email:"",
      username:"",
      password:""
    }

   

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.loginText}>S I G N U P</Text>
        </View>
        <View>
          <Icons name="envelope" size={26}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Email"
                    autoCorrect={false}
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    // autoFocus={true}
                    keyboardType="email-address"  
                    onSubmitEditing={()=>this.username.focus()} 
                    
          />
        </View>
        <View>
          <Icons name="user" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Username"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={username =>  this.setState({username:username})}
                    ref={(input)=>this.username = input}
                    onSubmitEditing={()=>this.password.focus()} 
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
                Signup 
            </Text> 
        </TouchableOpacity>   
        <View style={styles.signuptextcont}>
            <Text style={styles.signuptext}>
                Already have an account? 
            </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("LoginForm")}> 
                <Text style={styles.signupbutton}> SignIn</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignupForm

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(25, 118, 159)'

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
      backgroundColor: 'rgb(38, 174, 222)',

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
    fontWeight:"500",
  }
});