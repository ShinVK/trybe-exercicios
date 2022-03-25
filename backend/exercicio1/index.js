const AppClass = require('./app');

const app = new AppClass().app;

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listen in ${port}`);
  console.log(`http://localhost:${port}`);
});