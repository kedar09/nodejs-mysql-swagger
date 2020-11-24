const Joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

const userController = require('./user.controller');

exports.getAllUser = function (req, res) {
    userController.getAllUser(req, res);
};


exports.getUserById = async function (req, res) {
    data = req.params;
    const schema = Joi.object({
        userInfoId: Joi.number().integer().min(0).max(1000).required(),
    });

    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.getUserById(req, res);
    }
};


exports.addUser = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        userInfoId: Joi.number().integer().min(0).max(1000),
        name: Joi.string().min(3).max(50).required(),
        address: Joi.string().min(3).max(50).required(),
        dateOfBirth: Joi.date().format('YYYY-MM-DD').utc(),
        mobileNumber: Joi.number().integer()
    });

    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.addUser(req, res);
    }
};


exports.updateUser = async function (req, res) {
    const data = req.body;
    const schema = Joi.object({
        userInfoId: Joi.number().integer().min(0).max(1000).required(),
        name: Joi.string().min(3).max(50),
        address: Joi.string().min(3).max(50),
        dateOfBirth: Joi.date().format('YYYY-MM-DD').utc(),
        mobileNumber: Joi.number().integer()
    });

    const {error} = await schema.validate(data);
    if (error) {
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.updateUser(req, res);
    }
};

exports.deleteUserById = async function (req, res) {
    const data = req.params;
    const schema = Joi.object({
        userInfoId: Joi.number().integer().min(0).max(1000).required(),
    });

    const {error} = await schema.validate(data);
    if (error) {
        console.log(error);
        res.status(400).send({ error: error.details[0].message });
    } else {
        userController.deleteUserById(req, res);
    }    
};



