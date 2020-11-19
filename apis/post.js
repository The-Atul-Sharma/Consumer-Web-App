import API from './index';

export const getPost = async (postId) => {
  const response = await API.get(`/posts/${postId}`);

  return response.data;
};

export const getUserDetails = async (params = {}) => {
  const response = await API.get('/users/', { params });

  return response.data;
};