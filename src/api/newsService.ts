import { apiClient } from './apiClient';

const NEWS_API_BASE_URL = 'https://news.uscannenbergmedia.workers.dev';

interface FetchNewsParams {
    size: number;
    from: number;
}

export const fetchNews = async ({ size, from }: FetchNewsParams) => {
    const params = new URLSearchParams({
        website: 'uscannenberg',
        q: 'type:story',
        size: size.toString(),
        sort: 'display_date:desc',
        _sourceInclude:
            'headlines.basic,subheadlines.basic,display_date,canonical_url,promo_items.basic.additional_properties.resizeUrl,credits',
        from: from.toString(),
    });

    return await apiClient(NEWS_API_BASE_URL, `?${params.toString()}`);
};
