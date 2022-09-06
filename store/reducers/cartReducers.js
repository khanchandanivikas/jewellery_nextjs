import * as actionTypes from "../actions/actionTypes";

const initialState = {
  numberCart: 0,
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_QUANTITY:
      state.carts = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

    case actionTypes.DECREASE_QUANTITY:
      state.numberCart--;
      let cartExists = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (cartExists.quantity === 1) {
        cartExists.quantity -= 1;
        return {
          ...state,
          carts: [
            ...state.carts.filter((item) => item.id !== action.payload.id),
          ],
        };
      } else {
        cartExists.quantity -= 1;
        [
          ...state.carts,
          state.carts.map((item) => {
            item.id === action.payload.id
              ? { ...cartExists, quantity: cartExists.quantity - 1 }
              : item;
          }),
        ];
      }
      return {
        ...state,
      };

    case actionTypes.ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    default:
      return state;
  }
};

export default cartReducer;
