var usertoken = require('../../utilities/token');
var User = require('../models/user');

module.exports = function (app, express) {

    var api = express.Router();

    //user signup
    api.post('/signup', function (req, res) {

        var user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password
        });

        var token = usertoken(user);
     
        user.save(function (err) {
            if (err) {
                res.send(err);
                return;
            }
          res.json({ success: true, message: 'User has been created!', token: token })
        });

    });

        api.get('/varun',function(req,res){

         res.json({ success: true, message: 'User has been created!'})

    });
return api;
}