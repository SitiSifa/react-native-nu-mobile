import React from 'react'
import {
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#9A9C9A',
	},
	content:{
		alignItems: 'center',
	},
	logo: {
		width:250,
		height:270,
	},
	inputContainer: {
		margin: 20,
		marginBottom: 0,
		padding: 20,
		paddingBottom: 10,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
	input: {
		fontSize: 16,
		height: 40,
		padding: 10,
		marginBottom: 10,
		backgroundColor: 'rgba(255,255,255,1)',
	},
	buttonContainer:{
		alignSelf: 'stretch',
		margin: 20,
		padding: 20,
		backgroundColor: 'green',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
	buttonText:{
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	}
});

export default styles
