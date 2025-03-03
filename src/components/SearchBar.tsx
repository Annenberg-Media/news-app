import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleChangeText = (text: string) => {
        setQuery(text);
        onSearch(text); // Trigger search as user types
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleChangeText}
                value={query}
                placeholder="Search..."
                returnKeyType="search"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
});

export default SearchBar;