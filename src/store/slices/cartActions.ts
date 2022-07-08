import { actions, AppDispatch } from '..';
import firebaseApi from '../../services/firebaseApi';

export default function fetchCartInitialState() {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await firebaseApi.get('/cart.json');
      if (data) return dispatch(actions.setCartInitialState(data));
      throw new Error('No data.');
    } catch (err) {
      return 0;
    }
  };
}
