const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

const postsRoutes = require('./routes/posts');

const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// log each request path & response method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/posts', postsRoutes);

// connect to db
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log('You successfully connected to MongoDB!');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
