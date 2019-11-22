const verifyToken = require('./Auth');


module.exports.verifyAdmin = function(req , res , next){
    var token = req.headers.token;
    const userName = verifyToken.verifyToken(token);
    if(userName == process.env.USERNAME){
        next();
    }else{
        res.json("Not Authorized");
    }
}   