import { useRef, useEffect, useState, useCallback } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg'; // Ensure correct import
import TYPOGRAPHY from '../constants/typography';

// Define prop types
interface YoutubeVideoCardProps {
	title: string;
	videoId: string;
	date: string;
}


export default function YoutubeVideoCard({ title, videoId, date }: YoutubeVideoCardProps) {
	const playerRef = useRef<any>(null);

	const [playing, setPlaying] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.videoContainer}>
				<YoutubePlayer
					ref={playerRef}
					height={(Dimensions.get('window').width - 60) * 9 / 16}
					width={Dimensions.get('window').width - 60}
					play={playing}
					videoId={videoId}
					// onChangeState={onStateChange}
					webViewStyle={{ aspectRatio: 16 / 9 }}
				/>
			</View>

			<View style={styles.dateContainer}>
				<Text style={styles.dateText}>{date}</Text>
				<View style={styles.bookmarkWrapper}>
					<BookmarkIcon width={24} height={24} color={COLORS.primary} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: 'rgb(220, 220, 220)',
		borderStyle: "solid",
		borderRadius: 5,
		marginBottom: 15
	},
	titleContainer: {
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(220, 220, 220)',
		width: '95%',
	},
	title: {
		marginTop: 10,
		marginBottom: 10,
		color: COLORS.textSecondary,
		...TYPOGRAPHY.headings.h7
	},
	videoContainer: {
		alignItems: 'center',
		padding: 10,
		paddingBottom: 0,
		marginBottom: 5,
		width: "100%",
	},
	bookmarkWrapper: {
		paddingLeft: 100
	},
	dateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 5,
	},
	dateText: {
		color: COLORS.textSecondary,
		...TYPOGRAPHY.body.small,
		flex: 1,
		alignSelf: 'flex-start'
	}
});

















