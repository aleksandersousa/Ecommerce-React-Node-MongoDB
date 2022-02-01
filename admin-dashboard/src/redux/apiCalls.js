import { ApiServices } from '../services/apiServices';
import {
  productStart,
  productFailure,
  deleteProductSuccess,
  getProductSuccess,
  updateProductSuccess,
  addProductSuccess,
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

  dispatch(productStart());

  apiServices.getProducts().then((res) => {
    dispatch(getProductSuccess(res.data));
  }).catch(() => {
    dispatch(productFailure());
  });
};

export const deleteProduct = async (dispatch, id) => {
  const apiServices = new ApiServices();

  dispatch(productStart());

  apiServices.deleteProduct(id).then(() => {
    dispatch(deleteProductSuccess(id));
  }).catch(() => {
    dispatch(productFailure());
  });
};

export const updateProduct = async (dispatch, data) => {
  const apiServices = new ApiServices();

  dispatch(productStart());

  apiServices.updateProduct(data.id, data.product).then(() => {
    dispatch(updateProductSuccess(data));
  }).catch(() => {
    dispatch(productFailure());
  });
};

export const addProduct = async (dispatch, product) => {
  const apiServices = new ApiServices();

  dispatch(productStart());

  apiServices.addProduct(product).then(() => {
    dispatch(addProductSuccess(product));
  }).catch(() => {
    dispatch(productFailure());
  });
};
