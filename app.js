const express = require('express');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
connectDB();
app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`));




