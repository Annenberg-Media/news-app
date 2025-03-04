import { apiClient } from './ApiClient.ts';
import URLS from '../constants/urls';

interface FetchNewsParams {
    size: number;
    from?: number;
    isEditorsPick?: boolean;
}

export const fetchNews = async ({ size = 10, from = 0, isEditorsPick = false }: FetchNewsParams) => {
    const params = new URLSearchParams({
        website: 'uscannenberg',
        q: isEditorsPick ? 'taxonomy.tags.slug:"editor-pick"' : 'type:story',
        size: size.toString(),
        sort: 'display_date:desc',
        _sourceInclude:
            'headlines.basic,subheadlines.basic,display_date,canonical_url,promo_items.basic.additional_properties.resizeUrl,credits',
        from: from.toString(),
    });

    return await apiClient(URLS.NEWS_API_BASE_URL, `?${params.toString()}`);
};

