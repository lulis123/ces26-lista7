import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class CalculatorDisplay extends Component{

    render(){
        return(
            <Text
                className = "calculatorDisplay"
                style={{fontSize:64}}
            >
                {this.props.expression.expression}
            </Text>
        )
    }
}

const mapStateToProps = state => ({
    expression: state.expression
});

export default connect(mapStateToProps,null)(CalculatorDisplay)