import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg'; // Ensure you have an SVG or replace with an Image
import TYPOGRAPHY from '../constants/typography';

interface TrendingCardProps {
    headline: string;
    credits: string;
    readTime: string;
    imageUrl: string;
    onPress?: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9;

const TrendingCard: React.FC<TrendingCardProps> = ({ headline, credits, readTime, imageUrl, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[TYPOGRAPHY.headings.h6, styles.headline]} numberOfLines={2}>
                    {headline}
                </Text>
                <Text style={[TYPOGRAPHY.body.xSmall, styles.credits]}>By {credits}</Text>
                <Text style={[TYPOGRAPHY.body.xSmall, styles.readTime]}>{readTime} min read</Text>
                <BookmarkIcon width={24} height={24} stroke={COLORS.primary} style={styles.bookmarkIcon} />
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: COLORS.lightGray,
        alignItems: 'center',
        marginTop:8,
        borderRadius:12,
        marginBottom:20,
        width:cardWidth,
        height:cardWidth*0.7,
    },
    textContainer: {
        paddingTop: 8,
        paddigBottom: 12,
        paddingHorizontal: 16,
        flex:1,
    },
    headline: {
        marginBottom: 4,
    },
    credits: {
        color: COLORS.textSecondary,
        marginBottom: 2,
    },
    readTime: {
        color: COLORS.textSecondary,
    },
    imageContainer: {
        width:'100%',
        height:'60%',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    bookmarkIcon: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        color: COLORS.primary,
    },
});

export default TrendingCard;