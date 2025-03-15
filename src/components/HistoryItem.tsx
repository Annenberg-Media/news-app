import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface SearchItemProps {
  id: string;
  text: string;
  handleRemove: (id: string) => void;
}

const HistoryItem: React.FC<SearchItemProps> = ({ id, text, handleRemove }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.itemText}>{text}</Text>
        <TouchableOpacity onPress={() => handleRemove(id)}>
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

export { HistoryItem };
