const userModel = require('../models/user.model');
const md5 = require('md5')

async function getAllUser(req, res) {
    await userModel.find().then(resp => {
        res.json(resp);
    })
}
async function getUserById(req, res) {
    userModel.findOne({_id: req.params.id}).then( resp => { res.json(resp)})
}
async function addUser(req, res) {
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password),
        cart: req.body.cart,
        address: req.body.address,
        createdAt: new Date()
    });
    await newUser.save().then(resp => res.json(resp));
}
async function editUserById(req, res) {
    const user = req.body;
    await userModel.findOneAndUpdate({_id: req.params.id}, user, {new: true}).then( resp => res.json(resp))
}
async function updateCartById(req, res) {
    await userModel.findOneAndUpdate({_id: req.params.id},{cart: req.body}, {new: true}).then(resp => res.json(resp.cart))
}
async function getCArtById(req, res) {
    await userModel.findOne({_id: req.params.id}).then(resp => res.json(resp.cart))
}
async function deleteUserById(req, res) {
    userModel.findOneAndDelete({_id: req.params.id}).then(resp => { res.json(resp)})
}
async function loginUser(req, res) {
    const email = req.body.email
    const password = md5(req.body.password)
    userModel.findOne({email: email, password: password}).then(resp => { res.json(resp)}).catch(err => {res.json(err)});
}

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.addUser = addUser;
exports.editUserById = editUserById;
exports.getCArtById = getCArtById;
exports.updateCartById = updateCartById;
exports.deleteUserById = deleteUserById;
exports.loginUser = loginUser;