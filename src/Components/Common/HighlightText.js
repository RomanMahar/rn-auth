import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HighlightText extends Component {
	state = { lines: [] };
	renderLines() {
		let textString = this.props.children;
		// splitOn is integer value. Input expected char count max per line as prop
		const splitOn = this.props.splitOn;
		// Adds space to end of string, preventing cutoff of last word
		const singleSpace = ' ';
		textString = textString.concat(singleSpace);
		const numOfLines = Math.ceil(textString.length / splitOn);
		let lineStart = 0;
		let lineEnd = textString.slice(0, splitOn).lastIndexOf(' ');
		let fakeLineEnd = lineStart + splitOn;
		/* multiplying x2 to handle for awkward splits before very long words
		 that can push content beyond the above calculated numOfLines */
		for (i = 0; i < numOfLines * 2; i++) {
			let line = textString.slice(lineStart, lineEnd);
			// Adds spaces to start and end of already populated lines for visual padding
			if (line.length > 0) {
				line = singleSpace + line + singleSpace;
				this.state.lines.push(line);
			}
			lineStart = lineEnd + 1;
			fakeLineEnd = lineStart + splitOn;
			lineEnd = textString.slice(0, fakeLineEnd).lastIndexOf(' ');
		}
		return this.state.lines.map((line, i) => 
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
							{line}
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
