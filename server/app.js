const mongoose = require('mongoose');
// const request = require('request-promise');
require('./db/mongoose');
const express = require('express');
const app = express();
const PORT = process.env.port || 4000;

const dotenv = require('dotenv');

const Rating = require('./db/Rating');
const connectDB = require('./db/mongoose');

dotenv.config({ path: './config.env' });

connectDB();

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
