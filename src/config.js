const mysql=require('mysql')
require('dotenv').config()

const conn=mysql.createConnection({
    host:'remotemysql.com',
    user:'AcjlSpOAP9',
    password:'oQ0Uvz3oGr',
    database:'AcjlSpOAP9'
})

module.exports=conn