import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import SearchIcon from '../assets/icons/search.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch, onFocus, onBlur }) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (text: string) => {
    setSearchText(text);
    // if (onSearch) {
    //   onSearch(text);
    // }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={handleChangeText}
        onSubmitEditing={() => onSearch(searchText)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SearchIcon style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
