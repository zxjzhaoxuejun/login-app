import { ADD_TO_CART, UPDATE_CART, DELETE_CART } from "../actions/cart-actions";

const initState = {
  cart: [
    {
      product: "bread 700g",
      quantuity: 2,
      unitCost: 90
    },
    {
      product: "milk 500Ml",
      quantuity: 2,
      unitCost: 50
    }
  ]
};

export const cartsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product === action.payload.product ? action.payload : item
        )
      };
    default:
      return state;
  }
};
