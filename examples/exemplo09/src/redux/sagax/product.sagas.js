import {
  fork,
  put,
  take,
  takeEvery,
  race,
  takeLatest,
  call,
  delay,
} from "redux-saga/effects";

// yield fork()
// yield take("ADD_TODO")
// yield takeEvery("ADD_TODO")
// yield takeLatest("ADD_TODO")

// yield call(fetchApi, "arg1", "arg1")

// yield put({type: "ADD_TODO"})
// yield put({type: "REMOVE_TODO"})

// yield race()
// yield select()

const fetchProducts = async () => {
  return await fetch(
    "https://61f08795732d93001778eaa7.mockapi.io/products"
  ).then((res) => res.json());
};

function* getAllProducts() {
  try {
    console.log("getAllProducts");
    const products = yield call(fetchProducts);
    yield put({type: "ADD_PRODUCTS", payload: products})
  } catch (e) {}
}

function* funcTake() {
  console.log("funcTake");
  //   const action = yield take(['REMOVE_TODO', "ADD_TODO"])
  //   console.log(action);
  yield takeEvery("CALL_SAGA", getAllProducts);
}

function* funcTakeLast() {
  console.log("funcTakeLast");
  yield takeLatest("CALL_SAGA", getAllProducts);
}

export { funcTake, funcTakeLast };
