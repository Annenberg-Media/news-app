import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg'; // Ensure you have an SVG or replace with an Image
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeVideoCard(props) {
	const playerRef = useRef(null);
	const [playing, setPlaying] = useState(false);
	return (
		<View
			style={styles.container}
		>
			<YoutubePlayer
				ref={playerRef}
				height={500}
				width={330}
				play={playing}
				videoId={props.videoId} // Replace with your video ID
				onChangeState={event => console.log(event)}
				
			/>




		</View>

	);

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		

	}

});
