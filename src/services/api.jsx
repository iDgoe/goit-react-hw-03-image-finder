import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '35197019-a7fce12511fd1af60ca1b8895',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};

// const response = await axios.get(
//   `https://pixabay.com/api/?key=35197019-a7fce12511fd1af60ca1b8895&q=${query}&image_type=photo&per_page=12`
// );

