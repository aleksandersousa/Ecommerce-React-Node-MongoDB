import { ApiServices } from '../services/apiServices';
import { loginFailure, loginStart, loginSuccess } from './userRedux';

export const login = async (dispatch, user) => {
  const apiServices = new ApiServices();
  
  dispatch(loginStart());
  
  apiServices.login(user).then((res) => {
    dispatch(loginSuccess(res.data));
  }).catch(() => {
    dispatch(loginFailure());
  });
};
