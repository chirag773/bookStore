import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from 'react-native';
import { connect } from "react-redux";
import {PropTypes} from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome"
import AllBooks from './AllBooks';
import { fetchBooks,clearPosts } from "../redux/actions/BooksActions";
import { selectBooks } from "../redux/actions/SelectBooksAction";

class Home extends Component {

  // refresh() {

  //   // We can await the completion of dispatch, so long as we returned a promise.
  //   this.props.clearPosts();
  //   this.props.fetchBooks();
  // }

  static navigationOptions = ({navigation,refresh}) => ({
      title: 'Home',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#2F95D6',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
        
      },
      headerTitleStyle: {
        fontSize: 18,
      },
      headerRight: (
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity 
         onPress={()=> console.log("refresh")}
        >
          <Icon 
            style={{ 
            color:'#fff',
            marginRight:20
          }} 
            name={'refresh'} 
            size={25} 
          />
        </TouchableOpacity>
           <TouchableOpacity 
          onPress={() => { navigation.navigate("AddBooks")}}
        >
          <Icon 
            style={{ 
            color:'#fff',
            marginRight:10
          }} 
            name={'plus'} 
            size={25} 
          />
        </TouchableOpacity>
        </View>
       
      )
  });


  
  onButtonPress() {
    // const { _id } = this.props.books;
    // this.props.selectBooks(_id)
    this.props.navigation.navigate("ViewMoreScreen")

  }
  

  render() {
    return (
      <View style={styles.container}>
        <AllBooks onPress={this.onButtonPress.bind(this)}/>
      </View>
    );
  }
};


// mapStateToProps = (state) => {
//   return { 
//     Books:state.bookReducers.books,
//     error:state.bookReducers.errorMessage,
//     loading:state.bookReducers.loading,
//     selectBookId:state.selectBookReducers
//    }
// }

// export default connect(mapStateToProps,{selectBooks})(Home);
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#EBF5FB"
  },
});
  