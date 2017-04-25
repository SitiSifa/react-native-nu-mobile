import React, { PropTypes, Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  Icon,
  Drawer,
  Button,
} from 'native-base'
import ContentLayout from './Part/Content'
import LeftMenu from './Part/LeftMenu'

import Base from './../Style/Base'

export default class Simple extends Component {
  static PropTypes = {
    isLogin: PropTypes.bool.isRequired,
    setLogin: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  state = {
    drawerOpen: false,
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false})
  }
  
  openDrawer = () => {
    this.setState({drawerOpen: true})
  }
  
  render() {
    return (
      <Drawer
        styles={Base.containerDrawer}
        content={<LeftMenu setLogin={this.props.setLogin} closeDrawer={this.closeDrawer} />}
        open={this.state.drawerOpen}
        onOpen={() => {
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          this.setState({drawerOpen: false})
        }}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={(viewport) => {
          return 100
        }}
        closedDrawerOffset={() => 0}
        type='static'
      >
        <ContentLayout
          isLogin={this.props.isLogin}
          title={this.props.title}
          openDrawer={this.openDrawer}
        >
          { this.props.children }
        </ContentLayout>
      </Drawer>
    )
  }
}
