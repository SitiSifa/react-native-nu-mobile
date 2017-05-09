/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import { 
  Container,
  Header,
  Title,
  Content,
  Card,
  Footer,
  FooterTab,
  Drawer,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'

import CONSTANTS from './../../Constants/Main'
import Base from './../../Style/Base'
import TopMenu from './../../Style/TopMenu'

class ContentLayout extends Component {
  static PropTypes = {
    isLogin: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setContent: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    openDrawer: PropTypes.func.isRequired,
  }
  
  render() {
    return (
      <Container style={Base.container}>
        { this.props.isLogin &&
          <Header>
            <Left>
              <Button transparent onPress={ this.props.openDrawer }>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>{ this.props.title }</Title>
            </Body>
            <Right />
          </Header>
        }
        { this.props.children }
        <Footer >
          <FooterTab>
            <Button active>
              <Icon active name="camera" />
            </Button>
            <Button>
              <Icon name="videocam" />
            </Button>
            <Button>
              <Icon name="navigate" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ContentLayout
