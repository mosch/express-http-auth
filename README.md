# Express Http Basic Auth
  
## Installation

    $ npm install express-http-auth

## Quick Start

### Per route authorization

  You also can use the module as middleware. It's up to you to check the information.
  
    var private = require('express-http-auth').realm('Private Area');
  
    app.get('/private_area', private, function(req, res) {
      if (req.username == 'Foo' && req.password == 'Bar') {
        
      } else {
        req.send(103);
      }
    });
    
  To not repeat yourself, you better write a authorization middleware.
  
    var realm = require('express-http-auth').realm('Private Area');
    
    var checkUser = function(req, res, next) {
      if (req.username == 'Foo' && req.password == 'Bar') {
        next();
      } else {
        req.send(403);
      }   
    }
    
    var private = [realm, checkUser];
  
    app.get('/private_area', private, function(req, res) {
      // your normal code
      res.send('Hello '.req.username);
    });
  
    app.get('/protected_area', private, function(req, res) {
      // your normal code
      …
    });
    
    
## Global authorization

  Enables http basic authorization for the express framework.
   
    var http_auth = require('express-http-auth');
  
    // Configuration
    app.configure(function() {
      // Require http auth
      app.use(http_auth.realm('Private Area'));
      …
    }
    
  Express will now ask for authorization on every request. The authorization informations will be available in the request object.
