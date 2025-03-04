import React from 'react';
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {StyleSheet, FlatList, Text, View, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import NewsCard from "../components/NewsCard.tsx";
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import TrendingCard from '../components/TrendingCard';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const articles = [
    {
        id: '1',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    {
        id: '2',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    {
        id: '3',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    {
        id: '4',
        headline: 'A program’s lifeline: USC football high school recruiting tracker',
        credits: 'Thomas Johnson',
        readTime: '11',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvuTBVw-XxV2DrJKP2MZJQn-aVS-Eu1hORw&s', // Replace with API image
    },
    // More articles...
];
const { width } = Dimensions.get('window');

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


    const [activeIndex, setIndex] = React.useState(0);
    const flatListRef = React.useRef(null);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const finalIndex = Math.round(contentOffsetX / width);
        console.log('Active Index:', finalIndex);
        if (finalIndex !== activeIndex) {
            setIndex(finalIndex);
        }
    };
    

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
                <Text style={styles.h1} accessibilityRole="header">
                    Trending
                </Text>  
                <View style = {styles.carouselContainer}>
                    <FlatList
                        ref={flatListRef}
                        data={articles}
                        horizontal
                        decelerationRate="fast"
                        pagingEnabled
                        snapToInterval={width}
                        contentContainerStyle={{ paddingHorizontal: width*0.05, gap:width*0.1}} 
                        snapToAlignment="center"
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TrendingCard
                                headline={item.headline}
                                credits={item.credits}
                                readTime={item.readTime}
                                imageUrl={item.imageUrl}
                                onPress={() => console.log('Article clicked')}
                            />
                        )}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    />
                </View>  
                <View style={styles.dotsContainer}>
                    <AnimatedDotsCarousel
                        length={articles.length}
                        currentIndex={activeIndex}
                        maxIndicators={1}
                        interpolateOpacityAndColor={false}
                        activeIndicatorConfig={{
                            color: COLORS.black,
                            margin: 3,
                            opacity: 1,
                            borderColor:Colors.black,
                            size: 8,
                        }}
                        inactiveIndicatorConfig={{
                            color: 'white',
                            margin: 3,
                            opacity: 0.5,
                            size: 8,
                        }}
                        decreasingDots={[
                        {
                            config: { color: 'black', margin: 3, opacity: 0.5, size: 6 },
                            quantity: 1,
                        },
                        {
                            config: { color: 'black', margin: 3, opacity: 0.5, size: 4 },
                            quantity: 1,
                        },
                        ]}
                    />
                </View>
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
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:12
    },
    h1: {
        fontSize:20,   
        fontWeight: 'bold',
        color: COLORS.black,
        paddingHorizontal:16,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    carouselContainer: {
        justifyContent: 'center',
    }
});

export default HomeScreen;
