import { actions, AppDispatch } from '..';
import firebaseApi from '../../services/firebaseApi';
import { Product } from '../slices/cartSlice';

type RemoveCartProductPayload = {
  productIndex: number;
  newTotal: number;
};

type InsertCartProductPayload = {
  newProduct: Product;
  newTotal: number;
  existingProductIndex: number;
};

export default function fetchCartInitialState() {
  return async (dispatch: AppDispatch) => {
    const { data } = await firebaseApi.get('/cart.json');
    if (data) return dispatch(actions.setCartInitialState(data));

    return dispatch(actions.setCartInitialState({ products: [], total: 0 }));
  };
}

export function handleRemoveCartProduct(payload: RemoveCartProductPayload) {
  return (dispatch: AppDispatch) => {
    dispatch(actions.removeCartProduct(payload));
    dispatch(actions.setDoneNotification());
  };
}

export function handleInsertCartProduct(payload: InsertCartProductPayload) {
  return (dispatch: AppDispatch) => {
    dispatch(actions.insertCartProduct(payload));
    dispatch(actions.setDoneNotification());
  };
}
