import axios from 'axios';
import * as queryString from 'query-string';

export const readPost = (postId: string) => axios.get(`/post/${postId}`);
export const like = (postId: string) => axios.post(`/post/${postId}/like/`);
export const unlike = (postId: string) => axios.delete(`/post/${postId}/like/`);
export const sequences = (postId: string) => {
  const query = queryString.stringify({
    postId,
  });

  return axios.get(`/post/list/sequences?${query}`);
};