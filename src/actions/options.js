import database from '../firebase/firebase';

// ADD_OPTION
export const addOption = (option) => ({
  type: 'ADD_OPTION',
  option
});

export const startAddOption = (option = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/options`).push(option).then((ref) => {
      dispatch(addOption({
        id: ref.key,
        value: option
      }));
    });
  };
};

// REMOVE_OPTION
export const removeOption = (optionToRemove) => ({
  type: 'REMOVE_OPTION',
  option: optionToRemove
});

// SET_OPTIONS
export const setOptions = (options) => ({
  type: 'SET_OPTIONS',
  options
})

// RESET_OPTIONS
export const resetOptions = () => ({
  type: 'RESET_OPTIONS'
});
