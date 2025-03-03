import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg'; // Ensure you have an SVG or replace with an Image

interface NewsCardProps {
  headline: string;
  credits: string;
  readTime: string;
  imageUrl: string;
  onPress?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  headline,
  credits,
  readTime,
  imageUrl,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.headline} numberOfLines={2}>
          {headline}
        </Text>
        <Text style={styles.credits}>By {credits}</Text>
        <Text style={styles.readTime}>{readTime} min read</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <BookmarkIcon
          width={24}
          height={24}
          stroke={COLORS.primary}
          style={styles.bookmarkIcon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 4,
  },
  credits: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  readTime: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 8,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default NewsCard;
