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

var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dominiquehorner@gmail.com', // Your email id
            pass: '47vizzini' // Your password
            // Ask Dana about environment variables
        }
    });

var text = 'Hello world from \n\n' + req.body.name;

var mailOptions = {
    name: 'john smith',
    from: 'portfolio_contact@gmail.com>', // sender address
    to: 'd@destination.com', // list of receivers
    text: text //, // plaintext body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});

// =+==+==+==+==+==+==+==+==+==+==+==+==
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==
app.listen(port, function() {
    console.log('Server running on port ' + port)
})
