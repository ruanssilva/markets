var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {


        req.decoded = {noe : "opaa!!"};
        next();

        // // verifies secret and checks exp
        // jwt.verify(token, 'secret', function (err, decoded) {
        //     if (err) {
        //         return res.json({ success: false, message: 'Failed to authenticate token.' });
        //     } else {
        //         // if everything is good, save to request for use in other routes
                
        //         res.json(decoded)
        //     }
        // });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
})
// define the home page route
router.get('/', function (req, res) {

    console.log(req.decoded);

    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router