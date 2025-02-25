import { apiClient } from './apiClient';

const RADIO_API_BASE_URL = 'https://radios.uscannenberg.workers.dev';

interface FetchRadioParams {
    size: number;
    from: number;
}

export const fetchRadios = async ({ size, from }: FetchRadioParams) => {
    const params = new URLSearchParams({
        website: 'uscannenberg',
        q: 'taxonomy.primary_site.path="/listen/from-where-we-are"',
        size: size.toString(),
        sort: 'display_date:desc',
        _sourceInclude:
            'headlines.basic,subheadlines.basic,display_date,canonical_url,promo_items.basic.additional_properties.resizeUrl,credits',
        from: from.toString(),
    });

    return await apiClient(RADIO_API_BASE_URL, `?${params.toString()}`);
};
