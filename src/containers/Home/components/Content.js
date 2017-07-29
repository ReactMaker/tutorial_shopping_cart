import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AlbumJson from './Album.json';
import Product from './Product';
import Cart from './Cart';

export default class Content extends Component {
  state = {
    modal: false,
    album: AlbumJson,
    cart: [],
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  addToCart = (product) => {
    const cart = this.state.cart;
    cart.push(product);

    this.setState({
      cart
    });
  }

  deleteCartItem = (index) => {
    const cart = this.state.cart;
    cart.splice(index, 1);

    this.setState({
      cart
    });
  }

  checkout = (totalPrice) => {
    alert(`已從您的信用卡中扣除${totalPrice}元！`);
  }

  render() {
    const { album, cart, modal } = this.state;
    const totalPrice = cart.reduce((acc, item) => (acc += item.price), 0);

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
                  <Button color="primary" onClick={this.toggle}>購物車({cart.length})</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            {
              album.map(product => (
                <Col sm={6} md={4} className="mb-3">
                  <Product
                    product={product}
                    cart={cart}
                    addToCart={this.addToCart}
                  />
                </Col>
              ))
            }
          </Row>

          <Modal isOpen={modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
            <ModalBody>
              <Cart
                cart={cart}
                deleteCartItem={this.deleteCartItem}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={cart.length === 0}
                color="primary"
                onClick={() => this.checkout(totalPrice)}
              >
                結帳
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>取消</Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}
