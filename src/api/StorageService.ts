import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async (key: string, item: any) => {
    try {
        const existingItems = await getItems(key);
        const updatedItems = [...existingItems, item];

        await AsyncStorage.setItem(key, JSON.stringify(updatedItems));
    } catch (error) {
        console.error(`Error saving item under key "${key}":`, error);
    }
};

export const getItems = async (key: string): Promise<any[]> => {
    try {
        const storedItems = await AsyncStorage.getItem(key);
        return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
        console.error(`Error retrieving items under key "${key}":`, error);
        return [];
    }
};

export const removeItem = async (key: string, itemId: string) => {
    try {
        const existingItems = await getItems(key);
        const updatedItems = existingItems.filter(item => item.id !== itemId);

        await AsyncStorage.setItem(key, JSON.stringify(updatedItems));
    } catch (error) {
        console.error(`Error removing item with ID "${itemId}" under key "${key}":`, error);
    }
};

export const isItemSaved = async (key: string, itemId: string): Promise<boolean> => {
    const savedItems = await getItems(key);
    return savedItems.some(item => item.id === itemId);
};
