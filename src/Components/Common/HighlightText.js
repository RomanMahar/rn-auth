import React, { Component } from 'react';
import { View, Text } from 'react-native';

// extend component

// const HighlightText = (props) => {
// 	console.log(props.children.length);
// 	let temp = null;
// 	let textString = props.children;
// 	let stringBreak = 0;
// 	let splText = textString.split(' ');
// 	if (textString.length >= 10) {
// 		console.log(splText.length);
// 		for (word in splText) {
// 			stringBreak += splText[word].length + 1;
// 			// lastIndexOf & Slice
// 		}
// 		temp = <View><Text><Text style={styles.textStyle}>{ props.children }</Text></Text></View>;
// 	} else {
// 		temp = <View><Text style={{ fontSize: 28, }}>poo {splText}</Text></View>;
// 	}
// 	return (
// 		// .map
// 		<View>
// 			{temp}
// 		</View>
// 	);
// };
class HighlightText extends Component {
	state = { lines: [] };
	renderLines() {
		let textString = this.props.children;
		const splitOn = this.props.splitOn;
		console.log(splitOn);
		// let lineSec = textString.slice(0, 28).lastIndexOf(' ');
		textString = textString.concat(' ');
		const numOfLines = Math.ceil(textString.length / splitOn);
		console.log(textString.length);
		let lineStart = 0;
		let lineEnd = textString.slice(0, splitOn).lastIndexOf(' '); // will return 19
		console.log(textString.slice(20, 48));
		console.log(textString.slice(20, 48).lastIndexOf(' '));
		let fakeLineEnd = lineStart + splitOn;
		const allWords = textString.split(' ');
		const lastWord = allWords[allWords.length - 1];
		textString = textString.concat(' ' + lastWord);
		console.log(textString);
		for (i = 0; i < numOfLines; i++) {
			let lineSec = textString.slice(lineStart, lineEnd);
			console.log(lineSec);
			this.state.lines.push(lineSec);
			console.log(this.state.lines);
			lineStart = lineEnd + 1;
			fakeLineEnd = lineStart + splitOn;
			lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
			console.log(lineStart);
			console.log(fakeLineEnd);
			console.log(lineEnd);
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
		console.log(this.state);
		console.log(this.props);
		console.log(this);
		return (
			<View>
				{this.renderLines()}
			</View>
		);
	}
};

const styles = {
	textStyle: {
		fontSize: 28, 
		color: '#fff',
		backgroundColor: '#4F0A72'
	}
};

export { HighlightText };
