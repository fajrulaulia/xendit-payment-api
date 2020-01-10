const mysql=require('mysql')
require('dotenv').config()

const conn=mysql.createConnection({
    host:'remotemysql.com',
    user:'milos',
    password:'milos123',
    database:'milosdb'
})

module.exports=conn
