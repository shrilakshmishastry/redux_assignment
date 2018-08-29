export default (state,action) =>{
  console.log(state);
  switch (action.type) {
    case "SET_NAME":
      state.name=action.text;
    return state;
    case "CHECK":
      state.isOpen=action.isOpen;
      return state;
    default:
        return state;
  }

};
