import { actions, AppDispatch } from '..';
import firebaseApi from '../../services/firebaseApi';

export default function fetchCartInitialState() {
  return async (dispatch: AppDispatch) => {
    const { data } = await firebaseApi.get('/cart.json');
    if (data) return dispatch(actions.setCartInitialState(data));

    return dispatch(actions.setCartInitialState({ products: [], total: 0 }));
  };
}
