import LOTR from '../src/app';
import Movie from '../src/services/movie';

describe('LOTR SDK', () => {
  let accessKey;

  beforeAll(() => {
    // Arrange
    accessKey = 'iNjqQD1sU0q8aq4icgKI';
  });

    test('should expose the Movie API', () => {
    // Act
    const lotrClient = new LOTR(accessKey);

    // Assert
    expect(lotrClient.movie).toBeInstanceOf(Movie);
  });

});
