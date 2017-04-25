/**
 * @flow
 */

import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import styles from './../Style/Dashboard'

class Dashboard extends Component {
  render() {
    return (
        <View style={styles.position}>
              <View style={styles.rowOne}>
                    <Image source={require('../img/pengurus.png')} style={styles.imageContent}/>
                    <Image source={require('../img/warga.png')} style={styles.imageContent}/>
                    <Image source={require('../img/kearsipan.png')} style={styles.imageContent}/>
                    <Image source={require('../img/kegiatan_dan_kejadian.png')} style={styles.imageContent}/>
              </View>
              <View style={styles.rowOther}>
                    <Image source={require('../img/pelayanan.png')} style={styles.imageContent}/>
                    <Image source={require('../img/promosi.png')} style={styles.imageContent}/>
                    <Image source={require('../img/pasar.png')} style={styles.imageContent}/>
                    <Image source={require('../img/warung.png')} style={styles.imageContent}/>
              </View>
              <View style={styles.rowOther}>
                    <Image source={require('../img/dompet.png')} style={styles.imageContent}/>
                    <Image source={require('../img/konsultasi.png')} style={styles.imageContent}/>
                    <Image source={require('../img/doa.png')} style={styles.imageContent}/>
                    <Image source={require('../img/desa_nu.png')} style={styles.imageContent}/>
              </View>
              <View style={styles.rowOther}>
                    <Image source={require('../img/kesehatan.png')} style={styles.imageContent}/>
                    <Image source={require('../img/pendidikan.png')} style={styles.imageContent}/>
                    <Image source={require('../img/pertanian.png')} style={styles.imageContent}/>
                    <Image source={require('../img/kelautan.png')} style={styles.imageContent}/>
              </View>
        </View>
    );
  }
}

export default Dashboard
