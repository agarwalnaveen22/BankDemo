import RegisterReducer from '../../Reducers/RegisterReducer';
import {Constant} from '../../Utilities/Constant';

describe('test register reducer', () => {
  it('initial state', () => {
    const expectResp = {
      name: ''
    };
    const resp = RegisterReducer(undefined, {type: Constant.SET_INTIAL_REGISTER_STATE});
    expect(resp).toEqual(expectResp);
  });

  it('set register data', () => {
    const expectResp = {
      name: 'naveen agarwal'
    };
    const resp = RegisterReducer(undefined, {
      type: Constant.SET_REGISTER_DATA,
      payload: {prop: 'name', value: expectResp.name},
    });
    expect(resp).toEqual(expectResp);
  });
});