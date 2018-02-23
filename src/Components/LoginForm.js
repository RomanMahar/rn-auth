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
					<HighlightText>
						Birds in the sky carry these words for me.
						Flowers make me whole and the something something yeah
					</HighlightText>
				</CardSection>

			</Card>
		);
	}
}


export default LoginForm;
