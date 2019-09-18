
const payment = require('../model/payment')

module.exports={
    pay:(req,res)=>{
        const data = {
            'external_id':req.body.external_id,
            'status':req.body.status,
            'bank_code':req.body.bank_code,
            'paid_amount':req.body.paid_amount,
        }
       payment.pay(data)
        .then((result,err)=>{
            res.json({result})
        }) 
    },

    paid:(req,res)=>{
        const data = {
            'external_id':req.body.external_id,
            'status':req.body.status,
            'bank_code':req.body.bank_code,
            'paid_amount':req.body.paid_amount,
        }
       payment.paid(data,req.body.external_id)
        .then((result,err)=>{
            res.json({result})
        }) 
    }
}