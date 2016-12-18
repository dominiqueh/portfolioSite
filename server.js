// =+==+==+==+==+==+==+==+==+==+==+==+==
// Requires
//  =+==+==+==+==+==+==+==+==+==+==+==+==
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    port = process.env.PORT || 80,
    mongoose = require('mongoose') 


var sampleModel = require('./models/sampleSchema.js')
var SampeSchema = sampleModel.SampeSchema
var Sample = sampleModel.Sample

//  =+==+==+==+==+==+==+==+==+==+==+==+==
// Application Configuration
//  =+==+==+==+==+==+==+==+==+==+==+==+==
mongoose.connect('mongodb://localhost/DominiqueDB', function(err) {
    console.log('connected to THE MONGODS')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(express.static(path.join(__dirname, './public')))


//  =+==+==+==+==+==+==+==+==+==+==+==+==
// Gets and Posts
//  =+==+==+==+==+==+==+==+==+==+==+==+==

app.get("/", function(req, res) {
    res.sendFile('/index.html', {
        root: "../public/index.html"
    })
})

//  =+==+==+==+==+==+==+==+==+==+==+==+==
//  Nodemailer
//  =+==+==+==+==+==+==+==+==+==+==+==+==

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
   service: 'Gmail',
   auth: {
       user: 'dominiquehorner@gmail.com',
       pass: '47vizzini',
   }
}));

transporter.sendMail({
   from: email,
   subject: name,
   text: text,
});

transporter.close();

// =+==+==+==+==+==+==+==+==+==+==+==+==
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==
app.listen(port, function() {
    console.log('Server running on port ' + port)
})
