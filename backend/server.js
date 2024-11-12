const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Body parsing middleware

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)
// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
const problemRoutes = require('./routes/problemRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/problems', problemRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));