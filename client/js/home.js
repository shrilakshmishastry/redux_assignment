import React,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap';
const Home = () => {
return(
    <div>
    <Jumbotron className='bg-warning'>
      <Container className="mt-5">
        <Row className="mt-md-5">
          <Col md={{size:8 , offset:3}} className='bg-warning mt-md-5'>
            <h1 className='d-none   d-lg-block display-3'>ReduxBank</h1>
            <h1 className='d-lg-none d-xl-block ml-4'>ReduxBank</h1>
            <h6 className='ml-5 pl-md-5 h5'>Live with Peace</h6>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    </div>
);

}
export default Home;
