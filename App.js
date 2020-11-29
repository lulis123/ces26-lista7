import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStore} from 'redux';
import rootReducer from './reducer';
import {Provider} from "react-redux";
import CalculatorButton from './components/CalculatorButton';
import CalculatorDisplay from './components/CalculatorDisplay'
import Constants from 'expo-constants';

let store = createStore(rootReducer);

class App extends Component {
  
  render(){
    return (
      <Provider store={store}>
        <View style ={{position:'absolute',top:50,left:40}}>
          <CalculatorDisplay/>
        </View>
        <View style={{flexDirection:"row", position: 'absolute',top:150,left:20,right:0,bottom:0}}>
          <View stye ={{flexDirection: "row", marginLeft:50, justifyContent: 'space-evenly'}}>
            <CalculatorButton value={7}/>
            <CalculatorButton value={4}/>
            <CalculatorButton value={1}/>
            <CalculatorButton value={"/"}/>
          </View>
          <Text>{"\n"}</Text>
          <View stye ={{flexDirection: "row", marginLeft:50, justifyContent: 'space-evenly'}}>
            <CalculatorButton value={8}/>
            <CalculatorButton value={5}/>
            <CalculatorButton value={2}/>
            <CalculatorButton value={0}/>
          </View>
          <Text>{"\n"}</Text>
          <View stye ={{flexDirection: "row", marginLeft:20, justifyContent: 'space-evenly'}}>
            <CalculatorButton value={9}/>
            <CalculatorButton value={6}/>
            <CalculatorButton value={3}/>
            <CalculatorButton value={"*"}/>
          </View>
          <Text>{"\n"}</Text>
          <View stye ={{flexDirection: "row", marginLeft:20, justifyContent: 'space-evenly'}}>
            <CalculatorButton value={'CE'}/>
            <CalculatorButton value={"+"}/>
            <CalculatorButton value={"-"}/>
            <CalculatorButton value={"="}/>
          </View>
        </View>
      </Provider>
    );
  }
}

export default App
