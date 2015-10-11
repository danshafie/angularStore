var store = require('./../server/controllers/stores.js')

module.exports = function(app){
	app.post('/addCustomer', function(req,res){
		console.log(req.body)
		store.addCustomer(req,res)
	})
	app.get('/getAllCustomers', function(req,res){
		store.getAllCustomers(req,res)
	})
	app.post('/addOrder', function(req,res){
		store.addOrder(req,res)
	})
	app.get('/getAllOrders', function(req,res){
		store.getAllOrders(req,res)
	})
	app.post('/addProduct', function(req,res){
		store.addProduct(req,res)
	})
	app.get('/getAllProducts', function(req,res){
		store.getAllProducts(req,res)
	})
}