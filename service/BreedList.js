import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getBreeds } from './controller/apiController';

const BreedsList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    // Chama a função getBreeds quando o componente for montado
    fetchBreeds();
  }, []);

  const fetchBreeds = () => {
    getBreeds()
      .then(data => {
        setBreeds(data); // Define o estado com os dados das raças de cachorros
      })
      .catch(error => {
        console.error(error); // Tratamento de erros
      });
  };

  return (
    <View>
      <Text>Lista de Raças de Cachorros</Text>
      {breeds.map(breed => (
        <Text key={breed.id}>{breed.name}</Text>
      ))}
    </View>
  );
};

export default BreedsList;
