# Pizza Ordering React Demo

It's just a demo of some basic React skills for a quickie build in response to a job posting. It's not meant to be a production app, but it does have some basic tests and a few other niceties.

It was created using [my custom Create React App template](https://www.npmjs.com/package/cra-template-eslint-airbnb-tailwind). Try it. You might like it, but be prepared for the strictness of AirBnB's ESLint rules. Oh, and don't use it if you are a [Tailwind](https://tailwindcss.com/) hater (although I'm not sure why you would be, but you might be). On that note, feel free to ask me about my upcoming Tailwind course on [Scrimba](https://scrimba.com/).

The data fetching is done via [ky](https://github.com/sindresorhus/ky). It's a nice little wrapper around [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that adds some nice features like retries and timeouts. It's also a bit more concise than fetch.

## Getting Started

To get started, clone the repo and run `npm install` to install the dependencies. Then run `npm start` to start the development server. The app will be available at `http://localhost:3000`.

In order to actually fetch the data, you'll also need to run the server. To do that, run `npm run server` in a separate terminal window. The server will be available at `http://localhost:3001`. It's using [json-server](https://www.npmjs.com/package/json-server) to serve up the data.

## Running the Tests

To run the tests, run `npm test`. This will run the tests in watch mode. You can also run `npm run test:coverage` to run the tests and generate a coverage report.

## Next Steps

There are no tests for the API service itself as we are just getting data from a static JSON file. Note that if we were dealing with a full-stack app, we would want to test the API service as well using something like Mock Service Workers (MSW). MSW is a library that allows you to mock out the API service for testing purposes. It's a great tool for testing the API service without having to spin up a full testing server.

In addition, we would avoid tracking the state of external data by using something like [Hyper Fetch](https://hyperfetch.bettertyped.com/) or [Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/). We would avoid dealing with that as part of our component state.
