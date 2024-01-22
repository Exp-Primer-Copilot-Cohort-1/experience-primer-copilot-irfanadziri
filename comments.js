// Create web server
// 1. import express
const express = require('express');
// 2. create express object
const app = express();
// 3. import body-parser
const bodyParser = require('body-parser');
// 4. import mongoose
const mongoose = require('mongoose');
// 5. import path
const path = require('path');
// 6. import router
const router = require('./router');
// 7. import cors
const cors = require('cors');

// 8. connect to MongoDB
mongoose.connect('mongodb://localhost/comments', { useNewUrlParser: true });

// 9. use body-parser
app.use(bodyParser.json());

// 10. use cors
app.use(cors());

// 11. use router
app.use('/', router);

// 12. use static files
app.use(express.static(path.join(__dirname, '../public')));

// 13. create server
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});