# Appointments API

This is an API for managing appointments.

### Prerequisites

To get the project up and running you need to have `node`, `npm` and `wt-cli` installed on your machine.

## Run locally

In a terminal:

```bash
# Initial setup
npm install

# Create webtask with secret `MONGO_URL` in order connect to an instance of MongoDB
wt create index --secret MONGO_URL=<MONGOLAB-CONNECTION-URL> --bundle
```

## Built With

- [NodeJS](https://nodejs.org/en/) to build the server API.
- [Webtask CLI](https://webtask.io/cli) to make serverless endpoints

## Author

- **Ana Luiza Motta Gomes** - [analuizamtg](https://github.com/analuizamtg)
