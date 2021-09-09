import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import products_data from './products_data';
import ProductCard from './components/ProductCard';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Patika Store
      </Text>

      <TextInput style={styles.input}>Search</TextInput>
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    padding: 20,
    color: '#444bff',
    backgroundColor: '#febf5e',
  },
  input: {
    padding: 5,
    margin: 20,
    fontWeight: 'bold',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#444bff',
  },
});
export default App;
