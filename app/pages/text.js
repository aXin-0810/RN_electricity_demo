import React, {	Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-simple-modal';
import {Container, Header, Content, Title, Button, Icon} from 'native-base';

import WeChatModule from '../components/weChatModule'
 
export default class Texta extends React.Component {
  state = {open: false};
 
  modalDidClose = () => {
    this.setState({open: false});
  }

  openModal = () => {
    this.setState({open: true})
  }
  
  moveUp = () => this.setState({offset: 1})
  resetPosition = () => this.setState({offset: 0})
  closeModal = () => this.setState({open: false})
 
  render() {
    return (
      <Container style={{width:global.width}}>
        <Header androidStatusBarColor='pink'>
          <Button transparent>
              <Icon name="ios-arrow-back" />
          </Button>

          <Title>Header</Title>

          <Button transparent>
              <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>

          {/* <Button onPress={()=>{this.routing('IMPage',1)}} title="跳转聊天页面"></Button> */}

          {/* <WeChatModule/> */}
          
        </Content>
      </Container>
    );
  }

  //页面跳转fun
  routing = (src, val) => {
    this.props.navigate(src, { val: val })
  }

}