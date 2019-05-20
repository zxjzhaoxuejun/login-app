export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";

export const addToCart = (product, quantuity, unitCost) => {
  return {
    type: ADD_TO_CART,
    payload: { product, quantuity, unitCost }
  };
};

export const delToCart = product => {
  return {
    type: DELETE_CART,
    payload: { product }
  };
};

export const updateToCart = (product, quantuity, unitCost) => {
  return {
    type: UPDATE_CART,
    payload: { product, quantuity, unitCost }
  };
};
