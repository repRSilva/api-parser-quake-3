const app = require('./server');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server runing on port: ${process.env.PORT || 3000}`);
});
