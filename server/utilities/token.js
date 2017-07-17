var config = require('../../config/config');
var secretKey = config.secretKey;
var jsonwebtoken = require('jsonwebtoken');

module.exports = function (user) { 
  
 var token = jsonwebtoken.sign({
        id: user._id,
        name: user.name,
        username: user.username

    }, secretKey, { expiresIn: 1440 })

};