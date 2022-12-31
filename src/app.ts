import axios, { AxiosInstance } from 'axios';

import Movie from './services/movie';

export default class LOTR {
  private static readonly API_URL = 'https://the-one-api.dev/v2';
  private readonly client: AxiosInstance;

  movie: Movie;

  constructor(AuthToken?: string) {
    this.client = axios.create({
      baseURL: LOTR.API_URL,
      headers: {
        // optional AuthToken
        ...(!!AuthToken && { Authorization: `Bearer ${AuthToken}` }),
      },
    });

    this.movie = new Movie(this.client);
  }
}
