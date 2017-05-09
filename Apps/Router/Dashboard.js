/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import {
  View,
  Image,
  Button,
} from 'react-native'
import { 
  Container, 
  Content,
  Card, 
  CardItem,
  Thumbnail, 
  Text, 
  Body 
} from 'native-base'
import { 
  Col, 
  Row, 
  Grid 
} from 'react-native-easy-grid'

import styles from './../Style/Dashboard'

class Dashboard extends Component {
  static PropTypes = {
    setTitle: PropTypes.func.isRequired,
    setContent: PropTypes.func.isRequired,
  }

  onPressHandler = (page) => {
    this.props.setTitle(page)
    this.props.setContent(page)
  }

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/pengurus.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Warga') }>
                  <Image source={require('../img/warga.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/kearsipan.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/kegiatan_dan_kejadian.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/pelayanan.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/promosi.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/pasar.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/warung.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/dompet.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/konsultasi.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/doa.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/desa_nu.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/kesehatan.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/pendidikan.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/pertanian.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem 
                  cardBody 
                  onPress={ () => this.onPressHandler('Profile') }>
                  <Image source={require('../img/kelautan.png')} style={styles.imageContent}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}

export default Dashboard
