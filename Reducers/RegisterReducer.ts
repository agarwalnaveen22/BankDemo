import {Constant} from '../Utilities/Constant';

const INTIAL_STATE = {
  name: '',
};

export default (state = INTIAL_STATE, action: any) => {
  switch (action.type) {
    case Constant.SET_INTIAL_REGISTER_STATE:
      return {...INTIAL_STATE};
    case Constant.SET_REGISTER_DATA:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
