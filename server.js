const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.use(express.json({extended: false}));

app.use('/api/user', require('./routes/api/user'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));