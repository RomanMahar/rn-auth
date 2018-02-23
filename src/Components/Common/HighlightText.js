import React from 'react';
import { View, Text } from 'react-native';

const HighlightText = (props) => {
	console.log(props.children.length);
	let temp = null;
	let textString = props.children;
	let stringBreak = 0;
	// var concatString = [];
	var splText = textString.split(' ');
	var nestedText = [];
	if (textString.length >= 10) {
		console.log(splText.length);
		for (word in splText) {
			console.log(splText[word].length);
			console.log(splText[word]);
			stringBreak += splText[word].length + 1;
			console.log(stringBreak);
			// concatString.push(splText[word]);
			// console.log(concatString);
			nestedText += <Text><Text style={styles.textStyle}>{ splText[word] }</Text></Text>;
		}
		temp = <View><Text><Text style={styles.textStyle}>{ props.children }</Text></Text></View>;
	} else {
		temp = <View><Text style={{ fontSize: 28, }}>poo {splText}</Text></View>;
	}
	// b1 = <Text> abcd </Text>;
	// b2 = <Text> efg </Text>;
	// var boop = [b1, b2];
	return (
		<View><Text>{ nestedText[word] }</Text></View>
	);
};

const styles = {
	textStyle: {
		fontSize: 28, 
		backgroundColor: '#f00'
	}
};

export { HighlightText };
