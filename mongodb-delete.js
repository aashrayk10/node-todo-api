const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
if(err)
{
   return console.log('unable to connect mongodb server');
}
console.log('connected to mongodb server ');
 db= client.db('Todoapp')
 db.collection('Todos').deleteMany({text: 'walk th dog'});

 //db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
   // console.log(result);
    // });
});