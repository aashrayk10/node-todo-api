//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
if(err)
{
   return console.log('unable to connect mongodb server');
}
console.log('connected to mongodb server ');
 db= client.db('Todoapp')
// db.collection('Todos').insertOne(
//     {   text: 'Something to do',
//         completed: false

//     },(err,result)=>{
//         if(err)
//         {
//             return console.log('unable to insert todo',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));
//     });
client.close();
});