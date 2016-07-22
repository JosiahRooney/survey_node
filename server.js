var express     = require( 'express' ),
    mongoose 	= require('mongoose'),
    path        = require( 'path' ),
    bodyParser  = require('body-parser'),
    root        = __dirname,
    port        = process.env.PORT || 8000,
    app         = express();

app.use(bodyParser.json({ extended: true }));
app.use( express.static( path.join(root, './client')));
app.use( express.static( path.join(root, './bower_components')));
app.use( express.static( path.join(root, './node_modules')));

require('./server/config/db.js');

var routes = require('./server/config/routes.js');
routes(app);

app.listen( port, function() {
    console.log( 'server.js | server running on port', port);
});
