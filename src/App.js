import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCHKwNhk8Sa7HnhUCoY733wyrGoI__6Xyw',
			authDomain: 'auth-a7e95.firebaseapp.com',
			databaseURL: 'https://auth-a7e95.firebaseio.com',
			projectId: 'auth-a7e95',
			storageBucket: 'auth-a7e95.appspot.com',
			messagingSenderId: '190232613356'
		});
	}
	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
