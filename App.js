import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const data = await response.json();
    setData(data);
  };

  const handleButtonPress = async (imageid) => {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/images/${imageid}?sub_id=&size=&include_vote=&include_favourite`,
        {
          headers: {
            'x-api-key': 'live_b85HQSxOrAQvnorwMrIcpgGpjfq1yXdnAr3AXVsA5jBQYXQQxCBDQnxcaLfbp2wr'
          }
        }
      );
      const data = await response.json();
      console.log('API Response:', data);
      setSelectedRace(data.breeds[0]);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const clearBreed = () => {
    setSelectedRace(null);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button title="Ver imagem" onPress={() => handleButtonPress(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
      />
      {selectedRace && (
        <View style={styles.imageContainer}>
          {selectedRace.image && (
            <Image source={{ uri: selectedRace.image.url }} style={styles.image} />
          )}
          <Text style={styles.selectedRaceName}>{selectedRace.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
  listContainer: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  itemText: {
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  selectedRaceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
