import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, HighlightText, Spinner } from './Common';

class LoginForm extends Component {
	// in react, we hold the text outside of the text input. We hold it in the state
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({
			loading: false,
			error: 'Authentication failed.'
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}

	render() {
		return (
			<Card>
				
				<CardSection>
					<Input
						placeholder="username@emailhost.com"
						value={this.state.email}
						label={'Email'}
						// choosing not to rename "text" argument to email as reminder. But could.
						// if text arg were renamed, then "this.setState({ email })" would be refactor
						onChangeText={text => this.setState({ email: text })} 
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						secureTextEntry
						value={this.state.password}
						label="Password"
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				<Text style={styles.errorMessageStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>

				{/* <CardSection>
					<HighlightText
						splitOn={28}
						fontSize={28}
						marginTop={6}
						color={'#fff'}
						backgroundColor={'#4F0A72'}
					>
						Analogues antimensariousilics
						Analogues antimensariousilicslya saswi aihdsaiohdio ihasidhas hishai
					</HighlightText>
				</CardSection> */}

			</Card>
		);
	}
}

const styles = {
	errorMessageStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#e73042'
	}
}

export default LoginForm;
