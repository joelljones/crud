const express = require('express');

const app = express();

require('dotenv').config();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// // GET / READ
// app.get('/', (req, res) => {
//   // do something here
// });

// // POST / CREATE
// app.post('/', (req, res) => {
//   // do something here
// });

// // PATCH / UPDATE ONE
// app.patch('/', (req, res) => {
//   // do something here
// });

// // PUT / UPDATE ALL
// app.put('/', (req, res) => {
//   // do something here
// });

// // DELETE
// app.delete('/', (req, res) => {
//   // do something here
// });

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
