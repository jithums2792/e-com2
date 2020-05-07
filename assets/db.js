const mongoose = require('mongoose');
const _URL = 'mongodb://127.0.0.1:27017/ecom'
 const _URI = 'mongodb+srv://jithu2792:jithu@123@testdb-scppv.mongodb.net/test?retryWrites=true&w=majority'
//const _URI ='mongodb+srv://user:RCYjMY5yzEYryLAn@jsmonk-gftte.mongodb.net/testonlineshop?retryWrites=true&w=majority'
// mongoose.connect(_URI, {useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
//     console.log(err);
// })

mongoose.connect(_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(res=>{
    console.log('db connected')
}).catch(err=>{
    console.log('connection error')
    console.log(err)
});