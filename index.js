const express = require('express')
const app = express()
const port = 3000
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose');
const path = require('path')
const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/climbers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.on('error', console.log.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
	console.log('Database connected')
});

app.use('/static', express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
	res.render('home')
})

app.get('/user/:id', async (req, res) => {
	await const user = user.findById(req.params.id)
	res.render('user', { user })
})

app.get('/user/new', (req, res) => {
	res.render('new-user');
})

app.post('/user/new', async(req, res) => {
	const user = new User(req.body.user);
	await user.save();
	console.log(user);
	res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})