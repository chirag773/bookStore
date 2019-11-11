import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {createBooks,titleAdd,descriptionAdd} from "../redux/actions/AddBookActions";
import { Actions } from 'react-native-router-flux';

 class AddBooks extends Component {
  

    static navigationOptions = ({navigation}) => ({
        title: 'Add books',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: 'rgb(44, 111, 148)',
          borderBottomColor: '#ffffff',
          borderBottomWidth: 3,
          
        },
        headerTitleStyle: {
          fontSize: 18,
        },
        
    });


 


    onTitleAdd(text){
      this.props.titleAdd(text)
    }

    onDescriptionAdd(text){
      this.props.descriptionAdd(text)
    }

    onButtonPress() {
      const { title, description  } = this.props;
  
      this.props.createBooks({  title, description });
      this.props.navigation.navigate("AllBooks")

    }

  
    // navigator.push(getHelpRoute())
    
  

  render() {
    return (
        <KeyboardAvoidingView 
        behavior="padding" 
        style={styles.container}>
          <ScrollView>
            <View>
              <TextInput style={styles.textInput} 
                        placeholder="Title"
                        placeholderTextColor="black"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={this.onTitleAdd.bind(this)}
                        value={this.props.title}
              />
            </View>
            <View>
              <TextInput style={styles.textInput} 
                          placeholder="Description"
                          placeholderTextColor="black"
                          underlineColorAndroid="rgba(0,0,0,0)"
                          onChangeText={this.onDescriptionAdd.bind(this)}
                          value={this.props.description}
              />
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={this.onButtonPress.bind(this)}
            >
              <Text style={styles.buttonText}>
                  Submit 
              </Text>    
            </TouchableOpacity>

          </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

mapStateToProps  = ({addBookReducers}) => {
  const { title,description } = addBookReducers;

  return {
    title,
    description
  }
}

export default connect(mapStateToProps,{
  titleAdd,
  descriptionAdd,
  createBooks,
  
})(AddBooks)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(30,130,76,0.4)',    
    justifyContent: 'center',
  },
    textInput:{
        width:320,
        marginTop: 10,
        fontSize:15,
        height:50,
        paddingLeft: 20,
        backgroundColor:'rgba(30,130,76,0.2)'
    },
    button:{
      width:320,
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
})
