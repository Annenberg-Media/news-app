import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import COLORS from '../constants/colors';
import URLS from '../constants/urls';

interface EditorsPickCardProps {
  id: string;
  headline: string;
  imageUrl: string;
  onPress?: () => void;
}

const EditorsPickCard: React.FC<EditorsPickCardProps> = ({
  headline,
  imageUrl,
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && {opacity: 0.7}]}
      onPress={onPress}
      android_ripple={{color: COLORS.textSecondary}}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.headline} numberOfLines={4} ellipsizeMode="tail">
            {headline}
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{uri: URLS.ANN_BASE_URL + imageUrl}}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.bottomBorder} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 14,
    justifyContent: 'space-between',
    minHeight: 80,
  },
  textContainer: {
    flex: 1,
    marginRight: 0,
  },
  headline: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 0,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 118,
    height: 88,
    borderRadius: 4,
    resizeMode: 'cover',
    marginLeft: 10,
    marginRight: 5,
  },
  bottomBorder: {
    height: 1,
    backgroundColor: COLORS.black,
    marginLeft: -32,
    width: '120%',
  },
});

export default EditorsPickCard;
