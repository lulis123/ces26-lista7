const APPEND = "APPEND";
const CALCULATE = "CALCULATE";
const CLEAR = "CLEAR";

export const appendOperand = (value)=>{
    return {
        type: APPEND,
        payload: value
    };
}

export const calculateExpression = () => {
    return{
        type: CALCULATE
    };
}

export const clearExpression = () => {
    return{
        type: CLEAR
    };
}