import API from './index';

export const getPosts = async (params = {}) => {
  const response = await API.get('/posts/', { params });

  return response.data;
};