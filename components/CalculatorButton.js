import React, {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {appendOperand,calculateExpression,clearExpression} from '../actions'

class CalculatorButton extends Component{

    render(){
        return(
            <TouchableOpacity
                style ={{paddingLeft:10, paddingRight:10,paddingTop:10,paddingBottom:10, borderColor:"white",borderWidth:1 ,backgroundColor:'grey',alignItems:"center"}}
                className = "calculatorButton"
                onPress={()=>this.props.buttonClick(this.props.value)}    
            >
                <Text style={{fontSize:80, color:"white"}}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
}

const mapDispatchToProps= (dispatch) => ({
    buttonClick: (inputValue) => {
        if(inputValue == "="){
            return dispatch(calculateExpression());
        }
        if(inputValue == "CE"){
            return dispatch(clearExpression());
        }
        return dispatch(appendOperand(inputValue));
    }
})

export default connect(null,mapDispatchToProps)(CalculatorButton)