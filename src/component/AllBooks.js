import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { fetchBooks,clearPosts } from "../redux/actions/BooksActions";
import { connect } from "react-redux";
import {PropTypes} from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome"

class AllBooks extends Component {

  static navigationOptions = ({navigation,refresh}) => ({
    title: 'Home',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: 'rgb(44, 111, 148)',
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
          color:'white',
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
          color:'white',
          marginRight:10
        }} 
          name={'plus'} 
          size={25} 
        />
      </TouchableOpacity>
      </View>
     
    )
});

// onButtonPress() {
//   const { book,_id } = this.props.Books;
//   // this.props.selectBooks(_id)
//   this.props.navigation.navigate("ViewMoreScreen")
//   console.log(book._id)
// }


  
  // componentDidMount() {
  //   this.props.fetchBooks()

  // }

  componentDidMount() {
    //setInterval(() => {
      this.props.fetchBooks()

    //}, 6000)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.renderBooks(nextProps)
  //  }
  

   refresh() {

    // We can await the completion of dispatch, so long as we returned a promise.
    this.props.clearPosts();
    this.props.fetchBooks();
  }



  renderBooks(){
    const { Books,onPress } = this.props;
    // const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.mainView}>
            {Books.map((book) =>
              <TouchableOpacity
              key={book._id}
              style={styles.paticularView}
              onPress={()=>{console.log(book._id)}}
              // onPress={this.onButtonPress.bind(this)}
              >
                <Text style={styles.text}>{book.title}</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
    )
  }

  render() {
    const { error, loading, Books } = this.props;
    if (error) {
      return(
        <View style={ styles.container }>
          <Text>{error}</Text>
        </View>
      )
    }
    if(loading){
      return(
        <View style={ styles.container }>
          <ActivityIndicator size={50} color="blue"/>
        </View>
      )
    };

    return (
      <View style={ styles.container }>
        <View style={styles.scrollViewWrapper}>
        {this.renderBooks()}
          <TouchableOpacity
            style={styles.button}
            onPress={this.refresh.bind(this)}
          >
            <Text style={styles.refreshButtonText}>
              Refresh
            </Text>
          </TouchableOpacity>
        </View> 
      </View>
    );
  }
};

AllBooks.propTypes = {
  fetchBooks:PropTypes.func.isRequired,
  Books:PropTypes.array.isRequired,
  clearPosts:PropTypes.func.isRequired
}


mapStateToProps = (state) => {
  return { 
    Books:state.bookReducers.books,
    error:state.bookReducers.errorMessage,
    loading:state.bookReducers.loading,
   }
}


export default connect(mapStateToProps, {fetchBooks,clearPosts} )(AllBooks);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
    scrollViewWrapper:{
      flex:1,
    },
    scrollView:{
      paddingTop: 20,
      flex:1
    },
    mainView:{
      height:"100%",
    },
    paticularView:{
      height:80,
      borderWidth: 2,
      borderRadius: 2,
      borderColor: 'white',
      borderBottomWidth: 0,
      shadowColor: 'white',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      
    },
    text:{
      fontSize:18,
      marginLeft:5,
      marginTop:5
    },
    button: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: 'black',
      backgroundColor:"#2C3E50"
    },
    refreshButtonText:{
      color:"white"
    }
});
  