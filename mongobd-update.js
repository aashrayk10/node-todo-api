const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
if(err)
{
   return console.log('unable to connect mongodb server');
}
console.log('connected to mongodb server ');
 db= client.db('Todoapp')
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5cee6799fe67a7b2bb31c874")
},{
    $set: {
        completed : true
    }
},{
   returnOrignal : false 
}).then((result) => {
    console.log(result);
});
});