/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { 
  Container,
  Content,
  ListItem,
  Thumbnail,
  Text,
  Body 
} from 'native-base'
import GiftedListView from 'react-native-gifted-listview'
import Spinner from 'react-native-loading-spinner-overlay'

import CONSTANTS from './../Constants/Main'
import Modeluser from './../Models/User'
import styles from './../Style/List'

const AVATAR = require('../img/warga.png')

class Warga extends Component {

  state = {
    loading: true,
    total: 0,
    data: [],
  }

  constructor() {
    super()

    this.api = new Modeluser()
  }

  componentDidMount() {
    this.api.getUsers(1, CONSTANTS.Limit).then((result) => {
      this.setState({
        loading: false,
        total: result.total,
        data: result.data,
      })
    })
  }

  onFetch = (page = 2, callback, options) => {
    this.api.getUsers(page, CONSTANTS.Limit).then((result) => {
      this.setState({
        loading: false,
        total: result.total,
        data: result.data,
      })
    })

    setTimeout(() => {
      if ( page === (Math.ceil(this.state.total/CONSTANTS.Limit))) {
        callback(this.state.data, {
          allLoaded: true, // the end of the list is reached
        })
      } else {
        callback(this.state.data)
      }
    }, 1000)
  }

  onPress = (rowData) => {
    console.log('Just Let Me Know Who You Are')
    console.log(`${rowData.username} pressed`)
  }
  
  renderPaginationWaitingView = (paginateCallback) => {
    return (
      <ListItem 
        style={styles.More} 
        onPress={paginateCallback}>
        <Text style={styles.TextMore}>Load more</Text>
      </ListItem>
    )
  }
  
  renderPaginationAllLoadedView = () => {
    return
  }

  renderEmptyView = (refreshCallback) => {
    return (
      <Container>
        <Content>
          <Spinner
            visible
            size='small'
          />
        </Content>
      </Container>
    )
  }

  renderRowView = (rowData) => {
    return (
      <ListItem
        style={styles.Item}
        onPress={() => this.onPress(rowData)}>
        <Thumbnail
          style={styles.Thumb}
          square size={80}
          source={AVATAR} 
          />
        <Body style={styles.Item}>
          <Text style={styles.TextTitle}>{rowData.username}</Text>
          <Text style={styles.TextInfo} note>Telp. {rowData.phone}</Text>
          <Text style={styles.TextInfo} note>Email. {rowData.email}</Text>
          <Text style={styles.TextDesc} note>{rowData.keterangan}</Text>
        </Body>
      </ListItem>
    )
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Content>
            <Spinner 
              visible
              size='small'
            />
          </Content>
        </Container>
      )
    }

    return (
      <View style={styles.Container}>
          <GiftedListView
            pagination={true}
            firstLoader={false}
            refreshable={true}
            withSections={false}
            enableEmptySections={true}
            onFetch={this.onFetch}
            rowView={this.renderRowView}
            paginationAllLoadedView={this.renderPaginationAllLoadedView}
            paginationWaitingView={this.renderPaginationWaitingView}
            emptyView={this.renderEmptyView}
          />
      </View>
    );
  }
}

export default Warga
