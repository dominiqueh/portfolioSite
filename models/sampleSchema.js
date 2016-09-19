var mongoose = require('mongoose')

var SampleSchema = mongoose.Schema({
  testAttribute : {type : String, unique: true, required : true, default : "testing"},
})

var Sample = mongoose.model('Sample', SampleSchema)

module.exports  = {
  SampleSchema : SampleSchema,
  Sample : Sample,
}
