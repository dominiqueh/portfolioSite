// =+==+==+==+==+==+==+==+==+==+==+==+==
// Requires
//  =+==+==+==+==+==+==+==+==+==+==+==+==
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path'),
    port = process.env.PORT || 1337,
    mongoose = require('mongoose'),
    sendgrid = require('sendgrid')('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')

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
        root: "./public/index.html"
    })
})

// SENDGRID
// app.post("/sendMessage", function (req, res) {
// 	var payload = req.body
// 	payload.to = "dominiquehorner@gmail.com"
// 	sendgrid.send(payload,function (err,json) {
// 		if (err) {
// 			return res.send("FAIL")
// 		} else {
// 			res.send("SUCCESS!!!")
// 		}
// 	})
// })

// =+==+==+==+==+==+==+==+==+==+==+==+==
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==
app.listen(port, function() {
    console.log('Server running on port ' + port)
})
