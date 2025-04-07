import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../api/NewsService.ts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    interface Article {
        id: string;
        headline: string;
        credits: string;
        readTime: string;
        imageUrl: string;
        canonicalUrl: string;
    }

    const navigation = useNavigation<any>();
    const [articles, setArticles] = useState<Article[]>([]);


    useEffect(() => {
        const loadNews = async () => {
            try {
                const newsData = await fetchNews({ size: 30 });
                const formattedArticles: Article[] = newsData.map((item: any) => ({
                    id: item._id,
                    headline: item.headlines?.basic || 'No headline available',
                    credits: item.credits || 'Unknown Author',
                    readTime: '5',
                    imageUrl: item.promo_items?.basic?.additional_properties?.resizeUrl || '',
                    canonicalUrl: item.canonical_url || '',
                }));
                setArticles(formattedArticles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        loadNews();
    }, []);


    return (
        <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
            <FlatList
                data={articles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }: { item: Article }) => (
                    <NewsCard
                        id={item.id}
                        headline={item.headline}
                        credits={item.credits}
                        readTime={item.readTime}
                        imageUrl={item.imageUrl}
                        onPress={() =>  navigation.navigate('Reader', { url: item.canonicalUrl })}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default HomeScreen;
