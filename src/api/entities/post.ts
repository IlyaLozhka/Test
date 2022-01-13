import axios from '../axios';
import { postUrl } from '../common';

export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<PostModel[]> => {
  return axios.get(postUrl)
    .then((res) => res.data);
};