import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Row>
            <Col md={12}>
              <Jumbotron>
                <h1 className="display-3">美客唱片</h1>
                <p className="lead">
                  美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
                </p>
                <p className="lead">
                  並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
                </p>
                <p className="lead">
                  不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
                </p>
                <p className="lead">
                  進一步擴大影響力，提昇流行音樂產業的動能
                </p>
                <hr className="my-2" />
                <p className="lead">
                  <Button color="primary">購物車</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
