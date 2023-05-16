import axios from 'axios';

const apiKey = 'live_b85HQSxOrAQvnorwMrIcpgGpjfq1yXdnAr3AXVsA5jBQYXQQxCBDQnxcaLfbp2wr';

export const getBreeds = () => {
  return axios.get('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      // Processar a resposta da API aqui
      return response.data;
    })
    .catch(error => {
      // Tratar erros aqui
      console.error(error);
      throw error;
    });
};
