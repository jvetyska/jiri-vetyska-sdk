Javascript SDK for Movie API of the Lord Of The Ring API: https://the-one-api.dev/.

## Installation

```sh
npm i @jvetyska/jiri-vetyska-SDK
```

### Authentication

To use this SDK, you need to provide an `AuthToken`. The Auth Token is available for free on the API site: https://the-one-api.dev/sign-up.

### Usage example

To list all movies:

```js
import LOTR from '@jvetyska/jiri-vetyska-SDK';
const token = 'your-auth-token';
const client = new LOTR(token);

client.movie
  .list()
  .then((movies) => {
    // display data
  })
  .catch((err) => {
    // handle error
  });
```

## API documentation

The API documentation is available at https://the-one-api.dev/documentation.



