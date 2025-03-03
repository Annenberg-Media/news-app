import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import QuillPenIcon from '../assets/icons/quill-pen-line.svg';
import NewsCard from '../components/NewsCard';

// Mock data for Editor's Picks (Replace with API call)
const mockEditorsPicks = [
  {
    id: '1',
    headline: "The Mavericks' other 1-2 punch",
    credits: 'John Doe',
    readTime: '5',
    imageUrl: 'https://picsum.photos/112/112?random=1',
  },
  {
    id: '2',
    headline: 'Trojan transfers: live USC football transfer portal tracker',
    credits: 'Jane Smith',
    readTime: '3',
    imageUrl: 'https://picsum.photos/112/112?random=2',
  },
  {
    id: '3',
    headline:
      '‘Art Konbini’ by Giant Robot and JANM makes meeting creatives and supporting their work ‘convenient’',
    credits: 'Alex Brown',
    readTime: '4',
    imageUrl: 'https://picsum.photos/112/112?random=3',
  },
  {
    id: '4',
    headline: 'Ms. Atlas',
    credits: 'Alice Johnson',
    readTime: '2',
    imageUrl: 'https://picsum.photos/112/112?random=4',
  },
  {
    id: '5',
    headline:
      'SPARKS: Clark’s late-game heroics seal the deal for Indiana Fever’s first win',
    credits: 'Michael Lee',
    readTime: '6',
    imageUrl: 'https://picsum.photos/112/112?random=5',
  },
];

const SearchScreen = () => {
  const [editorsPicks, setEditorsPicks] = useState(mockEditorsPicks); // Replace with API call

  useEffect(() => {
    // Fetch data here if using an API
    // Example: fetchEditorPicks().then(setEditorsPicks);
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
                headline={item.headline}
                credits={''}
                readTime={''}
                imageUrl={item.imageUrl}
                onPress={() => console.log(`Clicked on: ${item.headline}`)}
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
    fontSize: 18,
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
