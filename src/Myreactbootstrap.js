import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'

function Myreactbootstrap() {
  return (
    <Container className='mt-3'>
        <Row>
            <Col className='bg-info'>
            <h1>react bootstrap</h1>
            <h1>heading</h1>
            <Button variant="primary">Primary</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Myreactbootstrap