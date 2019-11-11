import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Home from "./src/component/Home";
import AddBooks from "./src/component/AddBooks";
import AllBooks from "./src/component/AllBooks";
import ViewMoreScreen from "./src/component/ViewMoreScreen";
import LoginForm from "./src/component/LoginForm";
import SignupForm from "./src/component/SignupForm";
import reducers from "./src/redux/reducers";
import store from "./src/store";
import { createStackNavigator } from "react-navigation"
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const store = createStoreWithMiddleware(BooksReducer);



export default class App extends React.Component {


  
  render() {
    return (
      <Provider store={store}>
          <AppStackNavigator style={{flex:1}}/>
      </Provider>
    );
  }
}


const AppStackNavigator = createStackNavigator({
  LoginForm:LoginForm,
  SignupForm:SignupForm,
  AllBooks:AllBooks,
  AddBooks:AddBooks,
  ViewMoreScreen:ViewMoreScreen
})







