var token = require('../utilites/token');
var User = require('../models/user');
var config = require('../../config');
var secretKey = config.secretKey;
var jsonwebtoken = require('jsonwebtoken');

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

        var token = token(user);
        user.save(function (err) {
            if (err) {
                res.send(err);
                return;
            }
          res.json({ success: true, message: 'User has been created!', token: token })
        });

    });
return api;
}