const conn=require('../config')


const model={
    pay:(data)=>{
        return new Promise((resolve,reject)=>{
            conn.query('insert payments set ?',data,(err,result)=>{
                 if (!err)
                     resolve(result)
                     reject(err)
            })
    })},

    paid:(data,external_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query('update payments set ? where external_id = ?',[data,external_id],(err,result)=>{
                 if (!err)
                     resolve(result)
                     reject(err)
            })
    })},

}

module.exports=model