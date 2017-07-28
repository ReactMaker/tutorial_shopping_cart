import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Row>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
            <Col xs="12" md="4"><Button color="danger" block>Danger</Button></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
