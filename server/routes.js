/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors')

module.exports = function(app) {

  // Insert routes below
  app.use('/api/load', require('./api/load'));
  app.use('/api/hashes',  require('./api/hash'))
  app.use('/api/sets',   require('./api/set'))
  app.use('/api/pairs',  require('./api/pair'))

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html')
    })
}
