import {combineReducers} from 'redux';
const APPEND = "APPEND";
const CALCULATE = "CALCULATE";
const CLEAR = "CLEAR";

const initialState = {
    expression: ""
}

function expressionReducer(state = initialState,action){
    
    if(state === undefined){
        return initialState
    }
    
    switch(action.type){
        case APPEND:
            return({
                ...state,
                expression: state.expression + action.payload
            })
        case CALCULATE:
            return({
                ...state,
                expression: String(eval(state.expression))
            });
        case CLEAR:
            return({
                ...state,
                expression: ""
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    expression: expressionReducer
})

export default rootReducer