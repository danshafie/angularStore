var mongoose = require("mongoose")

var productSchema = new mongoose.Schema({
	productName: String,
	description: String,
	quantity: Number,
	created: {type: Date, default: Date.now()}
})

mongoose.model('product', productSchema)