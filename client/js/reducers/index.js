export default (state,action) =>{
console.log(action.value);
  switch (action.type) {
    case "SET_NAME":
      state.name=action.name;
      state.password=action.password;
      state.mobile_num=action.mobile_num;
    return state;
    case "CHECK":
      state.isOpen=action.isOpen;
      return state;
    default:
        return state;
  }

};
