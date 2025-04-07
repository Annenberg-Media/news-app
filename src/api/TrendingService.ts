import { apiClient } from './ApiClient.ts';
import URLS from '../constants/urls';
import KEYS from '../constants/keys.ts';
import { replaceItem } from './StorageService.ts';

export const fetchTrendingSearches = async () => {
    try {
        const response = await apiClient(URLS.TRENDING_SEARCHES_API_URL);
        const data = await response.json();

        if (data.popularSearches && data.popularSearches.length > 0) {
            await replaceItem(KEYS.POPULAR_SEARCHES, data.popularSearches);
        }

        if (data.trendingArticles && Object.keys(data.trendingArticles).length > 0) {
            await replaceItem(KEYS.TRENDING_ARTICLES, data.trendingArticles);
        }
    } catch (error) {
        console.error('Error fetching trending searches:', error);
    }
};
