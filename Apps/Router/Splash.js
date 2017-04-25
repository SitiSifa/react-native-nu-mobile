import React, { PropTypes, Component } from 'react'
import {
	Container,
  Content,
} from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay'

class Splash extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Spinner
            visible
            size='small'
            textContent={"proses..."} 
            textStyle={{color: '#FFF', fontSize: 12}}
          />
        </Content>
      </Container>
    )
  }
}

export default Splash
