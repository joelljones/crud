const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

const postsRoutes = require('./routes/posts');

const cors = require('cors');

const path = require('path');

// Serve static files from the 'frontend/build' directory
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve the React app for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// middleware
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000', // Adjust this to match your frontend origin
  })
);

app.options('*', cors()); // Enable preflight requests for all routes

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
