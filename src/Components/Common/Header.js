// Import libs for making component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Make component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	// return <Text style={styles.textStyle}>Albums!</Text>;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
   viewStyle: {
    backgroundColor: '#fff8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#111',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
   },
   textStyle: {
    fontSize: 28,
    textAlign: 'center',
   }
});

// Make component available to other parts of app. Export Component
export { Header };

