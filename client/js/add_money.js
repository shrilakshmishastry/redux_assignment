import React,{Component} from 'react';
import {store} from './store/index.js';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText } from 'reactstrap';

class Add_money extends React.Component{
  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col md={{size:6}} className='bg-success'>
              <img src='#' alt='hello world'/>
            </Col>
            <Col md={{size:6}} className='bg-primary'>
              <h2>Add money to your account</h2>
              <Form>
                <FormGroup>
                <InputGroup>
                  <Input type='text' name='text'id='name' placeholder='name' />
                  <Input/>
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
export default Add_money;
