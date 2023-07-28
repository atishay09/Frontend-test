import { call, put, takeEvery } from 'redux-saga/effects'

function getApi(data) {
   console.log(data)
   const apiUrl = `https://dummyjson.com/products?skip=${data*30}`;
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchProducts(action) {
   try {
      const products = yield call(getApi,action.payload);
      yield put({type: 'GET_PRODUCTS_SUCCESS', products: products});
   } catch (e) {
      yield put({type: 'GET_PRODUCTS_FAILED', message: e.message});
   }
}

function* productSaga() {
   yield takeEvery('GET_PRODUCTS_REQUESTED', fetchProducts);
}

export default productSaga;