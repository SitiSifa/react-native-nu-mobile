import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'
import { 
  Container,
  Header, 
  Content,
  FooterTab,
  Footer,
  List,
  ListItem, 
  Thumbnail,
  Text, 
  Icon, 
  Badge, 
  Left, 
  Body, 
  Right, 
  Switch,
  Button,
} from 'native-base'
import { getSession, removeSession } from './../../Libs/Session'

import Base from './../../Style/Base'
const AVATAR = require('../../img/warga.png')

export default class LeftMenu extends Component {
  static PropTypes = {
    setLogin: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }

  state = {
    id: 0,
    username: '',
    nama: '',
    email: '',
  }

  componentWillMount() {
    getSession('loginNUMobile').then((data) => {
      if (data !== false) {
        this.setState({
          id: data.id,
          username: data.username,
          nama: data.nama,
          email: data.email,
        })
      }
    })
  }

  logOutHandler = () => {
    removeSession('loginNUMobile')
    this.props.setLogin(false)
    this.props.closeDrawer()
  }

  render() {
    return (
      <ScrollView style={Base.containerSidebar}>
        <Container>
          <Header>
            <Left/>
            <Body />
            <Right>
              <Button transparent light onPress={this.props.closeDrawer}>
                <Icon name='close' />
              </Button>
            </Right>
          </Header>
          <Content>
            <ListItem>
                <Thumbnail square size={80} source={AVATAR} />
                <Body>
                    <Text>{this.state.nama}</Text>
                    <Text note>{this.state.email}</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='home' />
                </Left>
                <Body>
                  <Text>Dashboard</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='person' />
                </Left>
                <Body>
                  <Text>Profile</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='settings' />
                </Left>
                <Body>
                  <Text>Pengaturan</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name='help' />
                </Left>
                <Body>
                  <Text>Bantuan</Text>
                </Body>
                <Right/>
            </ListItem>
          </Content>
          <Footer>
            <FooterTab>
              <Button full iconLeft onPress={this.logOutHandler}>
                <Icon name='log-out' style={Base.sidebarIconFooter}/>
                <Text style={Base.sidebarTextFooter}>Logout</Text>
              </Button>
            </FooterTab>
          </Footer> 
        </Container>
      </ScrollView>
    )
  }
}
