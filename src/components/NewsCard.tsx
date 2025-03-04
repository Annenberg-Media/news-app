import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import COLORS from '../constants/colors';
import BookmarkIcon from '../assets/icons/bookmark.svg';
import URLS from '../constants/urls';
import {isItemSaved, removeItem, saveItem} from '../api/StorageService.ts';
import KEYS from '../constants/keys.ts';

interface NewsCardProps {
  id: string;
  headline: string;
  credits: string;
  readTime: string;
  imageUrl: string;
  onPress?: () => void; // Card press
  onBookmarkPress?: () => void; // Bookmark press
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  headline,
  credits,
  readTime,
  imageUrl,
  onPress,
}) => {
  const [saved, setSaved] = useState(false);

  // Check if the article is already saved
  useEffect(() => {
    const checkSavedStatus = async () => {
      const alreadySaved = await isItemSaved(KEYS.SAVED_NEWS_KEY, id);
      setSaved(alreadySaved);
    };
    checkSavedStatus();
  }, [id]);

  // Toggle Bookmark
  const handleBookmarkPress = async () => {
    const article = {id, headline, credits, readTime, imageUrl};

    if (saved) {
      await removeItem(KEYS.SAVED_NEWS_KEY, id);
      console.log('Removed from saved');
    } else {
      await saveItem(KEYS.SAVED_NEWS_KEY, article);
      console.log('Saved');
    }
    setSaved(!saved);
  };

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
        <Image
          source={{uri: URLS.ANN_BASE_URL + imageUrl}}
          style={styles.image}
        />
        <Pressable style={styles.bookmarkWrapper} onPress={handleBookmarkPress}>
          <BookmarkIcon width={24} height={24} color={COLORS.primary} />
        </Pressable>
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
    justifyContent: 'space-between',
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
  // Holds image + bookmark together
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  bookmarkWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 125,
  },
});

export default NewsCard;
