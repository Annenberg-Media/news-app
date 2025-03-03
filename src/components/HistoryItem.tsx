import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface SearchItemProps {
  text: string;
}

const HistoryItem: React.FC<SearchItemProps> = ({ text }) => {  // Add text prop here
  const handleRemove = () => {
    console.log("Remove item");
  };

  function handleSearch(_event: GestureResponderEvent): void {
    console.log("Search for:", text);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.itemText} onPress={handleSearch}>{text}</Text>
        <TouchableOpacity onPress={handleRemove}>
          <Text style={styles.removeButton}>×</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  removeButton: {
    color: 'red',
    fontSize: 20,
    marginLeft: 10,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 10,
  },
});

export { HistoryItem };  // Export the component