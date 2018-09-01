import React,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'reactstrap';
const Home = () => {
return(
    <div className='text-center'>
    <Jumbotron className='bg-warning' >
      <Container >
        <Row >
          <Col md={{size:8 , offset:2}}  className='bg-warning '>
            <h1 className='d-none   d-lg-block display-3'>ReduxBank</h1>
            <h1  className='d-lg-none mt-5 pt-5 d-xl-block '>ReduxBank</h1>
            <h6 className='h5'>Live with Peace</h6>
          </Col>
          <Col md={{size:12 }} className="d-none  d-md-block">
            <img src="./../dist/landing.png"/>
          </Col>

        </Row>
      </Container>
    </Jumbotron>
    </div>
);

}
export default Home;
