const mongoose = require('mongoose')
const express = require('express')
const uri = require('./config/key').mongoURI
const port = 9019
const conn = express();





mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', function () {
    console.log('connection has been made');

}).on('error', function (error) {
    console.log('error is :', error);
})

conn.use(express.json())

const routes = require('./data/routes/route')
conn.use('/reportcard', routes)

conn.listen(port, function () {
    console.log(`server started on port ${port}`);
})
