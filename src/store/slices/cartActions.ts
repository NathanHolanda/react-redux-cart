import { actions, AppDispatch } from '..';
import firebaseApi from '../../services/firebaseApi';

export default function fetchCartInitialState() {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await firebaseApi.get('/cart.json');
      return dispatch(actions.setCartInitialState(data));
    } catch (err) {
      return 0;
    }
  };
}
