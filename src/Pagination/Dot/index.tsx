import * as React from "react"
import { StyleSheet, View } from "react-native"

interface Props {
	active: boolean
	emptyDotColor: string
	activeDotColor: string
	dotWidth: number
	dotHeight: number
}

// TODO change to something lightweight
const Dot = ({ active, emptyDotColor, activeDotColor, dotHeight, dotWidth }: Props) => {
	return <View style={[styles(emptyDotColor, activeDotColor, dotHeight, dotWidth).badge, active && styles(emptyDotColor, activeDotColor, dotHeight, dotWidth).active]} />
}

const styles = (emptyDotColor: string, activeDotColor: string, dotWidth: number, dotHeight: number) => StyleSheet.create({
	badge: {
		borderRadius: 50,
		borderColor: emptyDotColor,
		backgroundColor: emptyDotColor,
		borderWidth: 2,
		width: 20,
		height: 20,
		marginRight: 7,
		dotWidth: dotWidth,
		dotHeight: dotHeight,
	},
	active: {
		backgroundColor: activeDotColor,
	},
})

export default Dot
