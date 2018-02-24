import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HighlightText extends Component {
	state = { lines: [] };
	renderLines() {
		let textString = this.props.children;
		const splitOn = this.props.splitOn;
		// let lineSec = textString.slice(0, 28).lastIndexOf(' ');
		textString = textString.concat(' ');
		const numOfLines = Math.ceil(textString.length / splitOn);
		let lineStart = 0;
		let lineEnd = textString.slice(0, splitOn).lastIndexOf(' '); // will return 19
		let fakeLineEnd = lineStart + splitOn;
		const allWords = textString.split(' ');
		const lastWord = allWords[allWords.length - 1];
		textString = textString.concat(' ' + lastWord);
		for (i = 0; i < numOfLines; i++) {
			let lineSec = textString.slice(lineStart, lineEnd);
			this.state.lines.push(lineSec);
			lineStart = lineEnd + 1;
			fakeLineEnd = lineStart + splitOn;
			lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
		}
		return this.state.lines.map((lineSec, i) => 
			<View>
				<Text style={{ marginTop: 6 }}>
					<Text style={styles.textStyle} key={i.toString()}>{lineSec}</Text>
				</Text>
			</View>
		);
	}
	render() {
		return (
			<View>
				{this.renderLines()}
			</View>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 28, 
		color: '#fff',
		backgroundColor: '#4F0A72'
	}
};

export { HighlightText };
