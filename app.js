require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000 ;


 const payment = require('./src/controller/payment');
// const UserRoute = require('./src/routes/user');
// const PartnerRoute = require('./src/routes/partner');

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
});
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(

	bodyParser.urlencoded({
		extended: false
	})
);

app.get('/',(req,res)=>{
    res.json('Welcome to Xendit Payment Services')
})


app.post('/invoice_pay',payment.pay)
app.post('/invoice_paid',payment.paid)

