var mongoose = require("mongoose")
var Order = mongoose.model('order')
var Customer = mongoose.model('customer')
var Product = mongoose.model('product')

module.exports = (function(){
	return {
		addCustomer: function(req,res){
			var customer = new Customer({customerName: req.body.name, created: Date.now()})

			customer.save(function(err,result){
				if(err){
					console.log("error adding customer", err)
				}else{
					res.redirect('/getAllCustomers')
				}
			})
		},
		getAllCustomers: function(req,res){
			Customer.find({}, function(err,result){
				if(err){
					console.log("erro getting all customers", err)
				}else{
					res.json(result)
				}
			})
		},
		addOrder: function(req,res){
			var order = new Order({customerName: req.body.name, quantity: req.body.quantity, product: req.body.product, created: Date.now()})
			order.save(function(err,result){
				if(err){
					console.log("error adding this order", err)
				}else{
					res.redirect('/getAllOrders')
				}
			})
		},
		getAllOrders: function(req,res){
			Order.find({}, function(err,result){
				if(err){
					console.log("error getting all orders", err)
				}else{
					res.json(result)
				}
			})
		},
		addProduct: function(req,res){
			var product = new Product({productName: req.body.name, description: req.body.description, quantity: req.body.quantity, created: Date.now()})
			product.save(function(err,result){
				if(err){
					console.log("error adding product", err)
				}else{
					res.redirect('/getAllProducts')
				}
			})
		},
		getAllProducts: function(req,res){
			Product.find({}, function(err,result){
				if(err){
					console.log("error getting all prouducts", err)
				}else{
					res.json(result)
				}
			})
		}
	}
})();