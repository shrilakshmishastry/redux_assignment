const form_submit = (value)=>{
  console.log(value[0].value);
  return{
    type:'SET_NAME',
    value:{
      name:value[0].value,
      password:value[1].value,
      mobile_num:value[2].value
    }

  }
}
export default form_submit;
