import TYPES from "../types";

const INITIAL_STATE = {
    items: [
        {
            id: Math.random(),
            name: "PIKACHU",
            value: "$550.00"
        }
    ]
}

const CartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.increase:
            return {...state, count: state.count +1}

        case TYPES.decrease:
            return {...state, count: state.count -1}
    
        default:
            return state;
    }
}


export default CartReducer;