// Options Reducer


const optionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPTION':
      return [
        ...state,
        action.option
      ];
    case 'REMOVE_OPTION':
      return state.filter((option) => action.option !== option);
    case 'RESET_OPTIONS':
      return [];
    case 'SET_OPTIONS':
      return action.options;
    default:
      return state;
  }
};

export default optionsReducer;
