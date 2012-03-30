# Express Http Basic Auth
      
  Enables http basic authorization for the express framework.
   
    var http_auth = require('express-http-auth');
  
    // Configuration
    app.configure(function() {
      // Require http auth
      app.use(http_auth.realm('Private Area'));
      …
    }
    
  Express will now ask for authorization on every request. The authorization informations will be available in the request object.
  
## Installation

    $ npm install express-http-auth

## Quick Start

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

```

## License 

(The MIT License)

Copyright (c) 2009-2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.