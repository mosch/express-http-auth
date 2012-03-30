exports.realm = function(realmName) {
  var rname = realmName;    
  return function(req, res, next) {
    if (req.header('Authorization')) {
      var auth = new Buffer(req.header('Authorization').replace('Basic ', ''), 'base64').toString('ascii').split(':');    
      req.username = auth[0];
      req.password = auth[1];
      next();
    } else {
      res.header('WWW-Authenticate', 'Basic realm="' + rname + '"');
      res.send(401);    
    }
  }
}