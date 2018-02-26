import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, CardSection, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyCHKwNhk8Sa7HnhUCoY733wyrGoI__6Xyw',
			authDomain: 'auth-a7e95.firebaseapp.com',
			databaseURL: 'https://auth-a7e95.firebaseio.com',
			projectId: 'auth-a7e95',
			storageBucket: 'auth-a7e95.appspot.com',
			messagingSenderId: '190232613356'
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return ( 
						<Card><CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log out
							</Button>
						</CardSection></Card>
					)
			case false:
				return <LoginForm />;
			default:
				return <View style={{ top: 180 }}><Spinner /></View>;
		}
	};

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
