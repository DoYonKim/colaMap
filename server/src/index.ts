// import App from './api/App';

// const app = new App().application;

// app.listen(7300, () => {
//   console.log('Server listening on port 7300');
// });


import config from './config'
import express from 'express';

async function startServer(){
  const app = express();
  const PORT = config.port;

  await require('./loaders').default(app);

  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
  });
}

startServer();