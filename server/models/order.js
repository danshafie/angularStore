var mongoose = require("mongoose")

var orderSchema = new mongoose.Schema({
	customerName: String,
	quantity: Number,
	product: String,
	created: {type: Date, default: Date.now}
})

mongoose.model('order', orderSchema)