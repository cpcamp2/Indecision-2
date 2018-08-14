import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addOption,
  removeOption,
  resetOptions,
  setOptions,
  startAddOption
} from '../../actions/options';
import options from '../fixtures/options';
import database from '../../firebase/firebase';

const uid = 'thsismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

// beforeEach((done) => {
//   const optionsData = {};
//   options.forEach((option) => {
//
//   })
// })

test('should setup add option action object with provided values', () => {
  const action = addOption(options[0]);
  expect(action).toEqual({
    type: 'ADD_OPTION',
    option: options[0]
  });
});

test('should setup remove option action object', () => {
  const action = removeOption(options[1]);
  expect(action).toEqual({
    type: 'REMOVE_OPTION',
    option: options[1]
  });
});

test('should setup set options action object with data', () => {
  const action = setOptions(options);
  expect(action).toEqual({
    type: 'SET_OPTIONS',
    options
  });
});

test('should setup reset options action object', () => {
  const action = resetOptions();
  expect(action).toEqual({
    type: 'RESET_OPTIONS'
  });
})
