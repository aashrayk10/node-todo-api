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
//db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
//console.log('Todos');
//console.log(JSON.stringify(docs,undefined,2));
//},(err)=>
//{
//console.log('Unable to fetch todos',err)
//});
//db.collection('Todos').find().count().then((count)=>{
//console.log(`Todos count: ${count}`);
//},(err)=>{
//console.log('Unable to fetch todos',err)
//});
//client.close();
db.collection('users').find({name:'Aashray'}).toArray().then((docs)=>{
   console.log(JSON.stringify(docs,undefined,2));
});
});