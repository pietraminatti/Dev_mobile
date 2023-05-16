import { getBreeds } from './controller/apiController';

// Exemplo de uso da função getBreeds
getBreeds()
  .then(data => {
    console.log(data); // Dados da API
  })
  .catch(error => {
    console.error(error); // Tratamento de erros
  });
