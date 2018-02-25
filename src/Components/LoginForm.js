import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, HighlightText } from './Common';

class LoginForm extends Component {
	// in react, we hold the text outside of the text input. We hold it in the state
	state = { text: '' };

	render() {
		return (
			<Card>
				
				<CardSection>
					<Input
					value={this.state.text}
					label={'label'}
					onChangeText={text => this.setState({ text })} 
					/>
				</CardSection>

				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>

				<CardSection>
					<HighlightText
						splitOn={28}
						fontSize={28}
						marginTop={6}
						color={'#fff'}
						backgroundColor={'#4F0A72'}
					>
						Analogues antimensariousilics
						Analogues antimensarious ilicslya saswi aihdsaiohdio ihasidhas hishai
					</HighlightText>
				</CardSection>

			</Card>
		);
	}
}


export default LoginForm;
