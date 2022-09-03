import * as actionTypes from "./actionTypes";

export const increaseQuantity = (product) => {
  return {
    type: actionTypes.INCREASE_QUANTITY,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: actionTypes.DECREASE_QUANTITY,
    payload: product,
  };
};

export function addCart(cartItem) {
  return {
    type: actionTypes.ADD_CART,
    payload: cartItem,
  };
}
export function updateCart(cartItem) {
  return {
    type: actionTypes.UPDATE_CART,
    payload: cartItem,
  };
}
export function deleteCart(cartItem) {
  return {
    type: actionTypes.DELETE_CART,
    payload: cartItem,
  };
}
