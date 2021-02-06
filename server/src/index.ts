import App from './App';

const app = new App().application;

app.listen(7300, () => {
  console.log('Server listening on port 7300');
});
