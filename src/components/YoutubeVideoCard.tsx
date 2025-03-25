import { useRef, useEffect, useState, useCallback } from 'react';
import { View, Text, Alert, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg'; // Ensure correct import
import TYPOGRAPHY from '../constants/typography';
import { WebViewNavigation } from 'react-native-webview';

// Define prop types
interface YoutubeVideoCardProps {
	title: string;
	videoId: string;
	date: string;
}


export default function YoutubeVideoCard({ title, videoId, date }: YoutubeVideoCardProps) {
	const playerRef = useRef<any>(null);

	const [playing, setPlaying] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const videoWidth = Dimensions.get('window').width - 60;
	const videoHeight = (Dimensions.get('window').width - 60) * 9 / 16;
	const handlePlayerReady = () => {
		setLoading(false);
	};


	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.videoContainer}>

				{/* Show loading overlay until the player is ready */}
				{loading && (
					<View
						style={[
							styles.loadingOverlay,
							{
								height: videoHeight,
								width: videoWidth,
								display: loading ? 'flex' : 'none'
							},
						]}
					>
						<ActivityIndicator size="large" color={COLORS.primary} />
					</View>
				)}

				{/* Show YouTube player only when loading is false */}

				<YoutubePlayer
					ref={playerRef}
					height={videoHeight}
					width={videoWidth}
					play={playing}
					videoId={videoId}
					onReady={handlePlayerReady}  // Set loading to false when the player is ready
					webViewStyle={{ aspectRatio: 16 / 9 }}
					webViewProps={{
						onShouldStartLoadWithRequest: (request: WebViewNavigation) => {
							// Detailed logging to understand the URLs


							// More comprehensive URL checking
							const validPatterns = [
								`https://lonelycpp.github.io/react-native-youtube-iframe`,
								`https://www.youtube.com/embed/`,
								`about:blank`
							];

							const isValid = validPatterns.some(pattern =>
								request.url.includes(pattern)
							);


							return isValid;
						}
					}}
					onError={(e: string) => {
						console.error('Detailed YouTube Player Error:', e);
						// Optionally, add fallback UI or error message
					}}
				/>


			</View>

			<View style={styles.dateContainer}>
				<Text style={styles.dateText}>{date}</Text>
				<View style={styles.bookmarkWrapper}>
					<TouchableOpacity>
						<BookmarkIcon width={24} height={24} color={COLORS.primary} />
					</TouchableOpacity>

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

		position: 'relative', // Set to relative to allow absolute positioning of overlay
	},

	loadingOverlay: {
		alignItems: 'center',
		padding: 10,
		paddingBottom: 0,

		marginBottom: 5,
		width: "100%",
		position: 'absolute', // Position it absolutely within the video container

		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',



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

















