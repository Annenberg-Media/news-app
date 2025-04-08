interface FetchOptions {
  method?: string;
  headers?: HeadersInit_;
  body?: string;
}

export const apiClient = async (
  baseURL: string,
  endpoint: string,
  options: FetchOptions = {},
) => {
  const url = `${baseURL}${endpoint}`;

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    method: 'GET',
    headers: {...defaultHeaders, ...options.headers},
    ...options,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};
