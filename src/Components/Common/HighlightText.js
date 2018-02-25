import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HighlightText extends Component {
	state = { lines: [] };
	renderLines() {
		let textString = this.props.children;
		// splitOn is integer value. Input expected char count max per line as prop
		const splitOn = this.props.splitOn;
		// Adds space to end of string, preventing cutoff of last word
		textString = textString.concat(' ');
		const numOfLines = Math.ceil(textString.length / splitOn);
		let lineStart = 0;
		let lineEnd = textString.slice(0, splitOn).lastIndexOf(' ');
		let fakeLineEnd = lineStart + splitOn;
		for (i = 0; i < numOfLines + 1; i++) {
			let lineSec = textString.slice(lineStart, lineEnd);
			console.log(Boolean(lineSec));
			// Adds space to end of each line for visual padding
			if (lineSec.length > 0) {
				lineSec = lineSec.concat(' ');
				lineSec = ' ' + lineSec;
				this.state.lines.push(lineSec);
			}
			lineStart = lineEnd + 1;
			fakeLineEnd = lineStart + splitOn;
			lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
			console.log(Boolean(lineSec));
			console.log(this.state.lines);
		}
		return this.state.lines.map((lineSec, i) => 
			<View
				style={{
					marginTop: this.props.marginTop,  
			}}
			>
				<Text>
					<Text 
						style={{ 
							fontSize: this.props.fontSize,
							color: this.props.color,
							backgroundColor: this.props.backgroundColor
						}} 
						key={i.toString()}
					>
							{lineSec}
						</Text>
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

export { HighlightText };
