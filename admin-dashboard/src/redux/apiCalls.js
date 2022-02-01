import { ApiServices } from '../services/apiServices';
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from './productRedux';
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

export const getProducts = async (dispatch) => {
  const apiServices = new ApiServices();

  dispatch(getProductStart());

  apiServices.getProducts().then((res) => {
    dispatch(getProductSuccess(res.data));
  }).catch(() => {
    dispatch(getProductFailure());
  });
};

export const deleteProduct = async (dispatch, id) => {
  const apiServices = new ApiServices();

  dispatch(deleteProductStart());

  apiServices.deleteProducts(id).then(() => {
    dispatch(deleteProductSuccess(id));
  }).catch(() => {
    dispatch(deleteProductFailure());
  });
};
