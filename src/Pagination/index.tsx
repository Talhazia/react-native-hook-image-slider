import * as React from "react"
import { StyleSheet, View } from "react-native"
import Dot from "./Dot"

interface Props {
	images: string[]
	activeIndex: number
	emptyDotColor: string
	activeDotColor: string
	dotHeight: number
	dotWidth: number
}

const Pagination = ({ images, activeIndex, activeDotColor, emptyDotColor, dotWidth, dotHeight }: Props) => {
	return (
		<View style={styles.wrapper}>
			{images.map((slide, i) => (
				<Dot key={slide} active={activeIndex === i} activeDotColor={activeDotColor} emptyDotColor={emptyDotColor} dotWidth={dotWidth} dotHeight={dotHeight} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		position: "absolute",
		bottom: 25,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
})

export default Pagination
