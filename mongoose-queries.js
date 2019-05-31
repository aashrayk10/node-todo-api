const{mongoose}= require('./server/db/mongoose');
const{Todo}=require('./server/models/todo');
const{User}=require('./server/models/users');

var id='5cef7c9403d9435e220bf46011';
// Todo.find({
//     _id: id 
// }).then((todos)=>{
// console.log('Todos',todos);
// });
// Todo.findOne({
//     _id: id 
// }).then((todo)=>{
// console.log('Todos',todo);
// });
// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
// console.log('Todos',todo);
// }).catch((e)=>
//     console.log(e));
User.findById('5cef7e5eb9dcf5598a05b6c7').then((user)=>{
    if(!user){
        return console.log('Id not found');
    }
console.log('User',user);
},(e)=>{
    console.log(e);
});