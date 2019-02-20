const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Test controller!');
};

exports.user_create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};