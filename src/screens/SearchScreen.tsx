import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import QuillPenIcon from '../assets/icons/quill-pen-line.svg';
import NewsCard from '../components/NewsCard';
import {fetchNews} from '../api/NewsService';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const SearchScreen = () => {
  interface Article {
    id: string;
    headline: string;
    credits: string;
    readTime: string;
    imageUrl: string;
    canonicalUrl: string;
  }

  type RootStackParamList = {
    Reader: {url: string};
  };

  const [editorsPicks, setEditorsPicks] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const response = await fetchNews({size: 5, isEditorsPick: true});
        //console.log('Fetched News:', response);

        const formattedData: Article[] =
          response?.map(item => ({
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
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <QuillPenIcon width={22} height={22} fill={COLORS.primary} />
          <Text style={styles.sectionTitle}>Editor's Pick</Text>
        </View>

        <FlatList
          data={editorsPicks}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View style={styles.editorPickItem}>
              <Text style={styles.index}>{index + 1}</Text>
              <NewsCard
                id={item.id}
                headline={item.headline}
                credits={''}
                readTime={''}
                imageUrl={item.imageUrl}
                onPress={() =>
                  navigation.navigate('Reader', {url: item.canonicalUrl})
                }
                showBookmark={false}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
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
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 150,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
    marginLeft: 8,
  },
  editorPickItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginRight: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default SearchScreen;
