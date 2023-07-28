import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `https://dummyjson.com/auth/login`;
function postAPI(data) {
   return fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
         username: data?.email,
         password: data?.password,
         // expiresInMins: 60, // optional
       })
   },
   ).then(response => response.json())
      .catch((error) => { throw error })
}

function* fetchUser(action) {
   try {
      const user = yield call(postAPI, action.payload);
      yield put({ type: 'GET_USER_SUCCESS', user: user });
   } catch (e) {
      yield put({ type: 'GET_USER_FAILED',message: e.message });
   }
}

function* userSaga() {
   yield takeEvery('GET_USER_REQUESTED', fetchUser);
}

export default userSaga;