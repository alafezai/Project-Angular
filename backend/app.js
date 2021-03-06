const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRouter =  require('./routes/postes')
const promostionRouter =  require('./routes/promostionroute')
const userRouter = require('./routes/users');
const helpRouter = require('./routes/helpR');
const app = express();
// Connect DB

mongoose.connect('mongodb://localhost:27017/helpg',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

//const poste = require('./models/Post');
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/postes',postRouter);
app.use('/api/promostions',promostionRouter);
app.use('/api/auth', userRouter);
app.use('/api/help',helpRouter);

module.exports = app;
