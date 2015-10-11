var mongoose = require("mongoose")

var customerSchema = new mongoose.Schema({
	customerName: String,
	created: {type: Date, default: Date.now()}
})

mongoose.model('customer', customerSchema)