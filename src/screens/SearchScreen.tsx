import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import {fetchNews} from '../api/NewsService';
import EditorsPickCard from '../components/EditorsPickCard';
import {useNavigation} from '@react-navigation/native';
import QuillPenIcon from '../assets/icons/quill-pen-line.svg';

interface Article {
  id: string;
  headline: string;
  credits: string;
  readTime: string;
  imageUrl: string;
  canonicalUrl: string;
}

interface NewsApiResponse {
  _id: string;
  headlines?: {
    basic?: string;
  };
  credits?: string;
  word_count?: number;
  promo_items?: {
    basic?: {
      additional_properties?: {
        resizeUrl?: string;
      };
    };
  };
  canonical_url?: string;
}

const SearchScreen = () => {
  const [editorsPicks, setEditorsPicks] = useState<Article[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await fetchNews({size: 5, isEditorsPick: true});

        const formattedData: Article[] =
          response?.map((item: NewsApiResponse) => ({
            id: item._id,
            headline: item.headlines?.basic || 'No Title',
            credits: item.credits || '',
            readTime: item.word_count
              ? Math.ceil(item.word_count / 200).toString()
              : '',
            imageUrl:
              item.promo_items?.basic?.additional_properties?.resizeUrl || '',
            canonicalUrl: item.canonical_url || '',
          })) || [];

        setEditorsPicks(formattedData);
      } catch (error: unknown) {
        console.error(
          'Error fetching news:',
          error instanceof Error ? error.message : 'Unknown error',
        );
      }
    };
    loadNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <View style={styles.iconWrapper}>
            <QuillPenIcon width={22} height={22} fill={COLORS.primary} />
          </View>
          <Text style={styles.sectionTitle}>Editor's Pick</Text>
        </View>
        <FlatList
          data={editorsPicks}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View style={styles.editorPickItem}>
              <Text style={styles.index}>{index + 1}</Text>
              <EditorsPickCard
                id={item.id}
                headline={item.headline}
                imageUrl={item.imageUrl}
                onPress={() =>
                  navigation.navigate('Reader', {url: item.canonicalUrl})
                }
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },
  iconWrapper: {
    padding: 1,
    marginLeft: -5,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginLeft: 8,
  },
  listContent: {
    gap: 12,
  },
  editorPickItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 16,
  },
  index: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: 5,
  },
});

export default SearchScreen;
