import React,{Component} from 'react';
import {Container,Row,Col,Input,InputGroup,Button,Form, FormGroup, Label,FormText} from 'reactstrap';

const Div = {
    fontFamily: 'Kosugi sans-serif'
};
// component to Create_account
class Create_account extends React.Component{
  render(){
    return(
      <div style={Div}>
      <Container className="mt-md-5">
        <Row className="mt-md-5">
          <Col md={{size:6}} className=''>
            <img src='./../dist/account_open.png' alt='hello world'/>
          </Col>
          <Col md={{size:6}} className="mt-3">
            <h2 className="mt-3 ml-5">Create your account</h2>
            <Form>
              <FormGroup>
              <InputGroup className="mt-5">
              <Input type='text' name='text'id='name' placeholder='Full name' required />
                <Input type="password" name="password" id="password" placeholder="password" className="ml-md-3" required/>
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
export default Create_account;
