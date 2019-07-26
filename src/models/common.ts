import { postItem } from '../services';

export default {
  namespace: 'common',
  state: {
    list: [],
  },
  effects: {
    *fetch(
      { payload }: { payload: JsObject },
      { call, put }: { call: Function; put: Function }
    ) {
      const response = yield call(postItem, payload);
      yield put({
        payload: response,
        type: 'saveData',
      });
    },
  },
  reducers: {
    saveData(
      state: {
        list: any[];
      },
      { payload }: { payload: JsObject }
    ) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};
