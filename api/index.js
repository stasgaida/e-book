// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a mongoose model
const Item = mongoose.model('BOOKS_COLLECTION', { title: String, author: String, country: String, language: String, link: String, year: String, pages: String });

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());  // enable pre-flight

// Create
app.post('/books', async (req, res) => {
  try {
    console.log('Received Data:', req.body);
    const newItem = new Item(req.body);
    console.log('New Item:', newItem);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read all
app.get('/books', async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

// Read one
app.get('/books/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// Update
app.put('/books/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete
app.delete('/books/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
