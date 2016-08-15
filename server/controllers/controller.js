
module.exports = (function(){
	return {
        event: function(req, res){
            res.json({data: 'event worked'})
        }
	}
})()
