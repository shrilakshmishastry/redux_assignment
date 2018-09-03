import React,{Component,props} from 'react';
import {Container,Row,Col,Input,InputGroup,Button,Form,FormGroup, Label,FormText} from 'reactstrap';
import {store} from './store/index.js';
import form_submit from './actions/form_submit.js';
import {Control} from 'react-redux-form';
import axios from 'axios';
import {browserHistory} from 'react-router';
import {push} from 'react-router-redux';

require('./../images/landing1.png');
const Div = {
    fontFamily: 'Kosugi sans-serif'
};
// component to Create_account
class Create_account extends React.Component{
constructor(props){
  super(props);
  this.display_push=this.display_push.bind(this);
}
display_push(){
  this.props.history.push('/');
}
  render(){
      console.log(store.getState());
    return(
      <div style={Div}>
      <Container className="mt-md-5">
        <Row className="mt-md-5">
          <Col md={{size:6}} >
            <img src='./../dist/landing1.png' alt='hello world' height="400px" width="400px "/>
          </Col>
          <Col md={{size:6}} className="mt-3">
            <h2 className="mt-3 ml-5">Create your account</h2>
            <Form  onSubmit={handleSubmit}>
              <FormGroup>
              <InputGroup className="mt-5">
              <Input type='text' name='text'id='name' placeholder='Full name' required />
              <Input type="password" name="password" id="password" placeholder="password" className="ml-md-3"  required/>
              </InputGroup>
              <InputGroup>
                <InputGroup className="mt-4">
                  <Input type="number" name="number" id="number" placeholder="number" required/>
                </InputGroup>
              </InputGroup>
              <InputGroup className="mt-4 justify-content-center">
              <Button color="primary">
                  <small>
                    CONTINUE TO SUBMIT
                  </small>
                </Button>
              </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
const handleSubmit = (event)=>{
  event.preventDefault();
  const value=event.target.elements;
  console.log(value[0].value);
  console.log(event.target.elements[1].value);
  console.log(event.target.elements[2].value);
  axios.post('/create_account',
    {
      value:{
        name:value[0].value,
        password:value[1].value,
        mobile_num:value[2].value
      }
    }
  )
  .then(
    response=>{
      console.log( response.data.value);
      if(response.data.value == 'already exist'){
        console.log('hello world');
        this.props.history.push('/');
      }
      else {
        alert('successfully created account');
      }
    }
  )



}

export default Create_account;
