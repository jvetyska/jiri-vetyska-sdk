import { AxiosInstance, AxiosResponse } from 'axios';

import { Movie as MovieType } from '../types/movie';
import { ListResponse } from '../types/response';

export default class Movie {
  private client: AxiosInstance;
  static readonly BASE_PATH = '/movie';

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(): Promise<ListResponse<MovieType>> {
    return this.client
      .get(`${Movie.BASE_PATH}`)
      .then(
        (response: AxiosResponse<ListResponse<MovieType>>) => response.data
      );
  }

}
