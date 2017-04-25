import React, { PropTypes, Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Toast } from 'native-base'
import Spinner from './Splash'
import MD5 from 'md5'

import styles from './../Style/Login'
import Modeluser from './../Models/User'
import { setSession } from './../Libs/Session'
const LOGO = require('../img/numobile.png')

export default class Login extends Component {
	static PropTypes = {
		setLogin: PropTypes.func.isRequired,
  }

	state = {
		username: '',
		password: '',
	}
	
	constructor() {
    super()
		
		this.api = new Modeluser()
  }

	isEmail = (email) => {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
	}

	onUsernameChangesHandler = (username) => {
		this.setState({username: username})
	}
	
	onPasswordChangesHandler = (password) => {
		this.setState({password: password})
	}

	onSubmitHandler = () => {
		let data = JSON.parse('{}')
		const password = String(MD5(this.state.password))
		const isEmail = this.isEmail(this.state.username)
		
		if (isEmail) {
			data = Object.assign(data, {action: 'login', email: this.state.username, password: password})
		} else {
			data = Object.assign(data, {action: 'login', username: this.state.username, password: password})
		}
		
		this.api.login(data)
		.then((result) => {
			if (result.total > 0) {
				const sessionData = {
					id: result.data[0].id_user,
					username: result.data[0].username,
					nama: result.data[0].detail_lengkap,
					email: result.data[0].email,
				}
				setSession('loginNUMobile', sessionData)
				this.props.setLogin(true)
			} else {
				const username = isEmail ? 'email' : 'username'
				Toast.show({
					text: `${username}/password tidak valid`,
					position: 'bottom',
					buttonText: 'Tutup'
				})
			}
		})
	}

  render() {
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<Image source={LOGO} style={styles.logo}>
					</Image>
						<View style={styles.inputContainer}>
							<TextInput
								onChangeText={this.onUsernameChangesHandler}
								underlineColorAndroid='transparent' 
								style={styles.input} 
								placeholder='Nama Pengguna'>
							</TextInput>
							<TextInput
								onChangeText={this.onPasswordChangesHandler}
								secureTextEntry={true} 
								underlineColorAndroid='transparent' 
								style={styles.input} 
								placeholder='Password'>
							</TextInput>
						</View>
						<TouchableOpacity 
							onPress={this.onSubmitHandler} 
							style={styles.buttonContainer}>
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>
							<Text>Lupa Password?</Text>
				</View>
			</View>
    )
  }
}
