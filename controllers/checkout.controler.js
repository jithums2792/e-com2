const Razorpay = require('razorpay')
const instance = new Razorpay({
    key_id: 'rzp_test_w0c8rMig79bHby',
    key_secret: 'QR5J8xY9rEm7LOr0IIbh442h'
})


function creatOrder(req, res) {
    instance.orders.create({amount: 2000,currency: 'INR'}).then(resp => res.json(resp));
}
function fetchPayment(req,res) {
    instance.orders.fetch(req.params.id).then(resp => res.json(resp)).catch(err => res.json(err))
}

exports.creatOrder = creatOrder
exports.fetchPayment = fetchPayment