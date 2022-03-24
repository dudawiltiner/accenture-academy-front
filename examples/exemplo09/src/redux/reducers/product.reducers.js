const INITIAL_STATE = {
  items: [],
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default ProductReducer;
