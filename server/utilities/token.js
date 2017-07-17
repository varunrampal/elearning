module.exports.createToken = function (user) { 
  
 var token = jsonwebtoken.sign({
        id: user._id,
        name: user.name,
        username: user.username

    }, secretKey, { expiresIn: 1440 })

};