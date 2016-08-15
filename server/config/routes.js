var controller = require('../controllers/controller.js')

module.exports = function(app){
	app.get('/', function (req,res){
		console.log('in user index routes')
		controller.event(req,res);
	})
}
