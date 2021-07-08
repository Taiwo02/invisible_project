const Movie = require('./schema');
const date = require('./date')
const _ = require('lodash');
const path = require('path');
const randomstring = require("randomstring");

var set;

// data = [{
//     firstname:"admin",
//     lastname:"admin",
//     email: 'user1@gmail.com',
//     password: '123456',
//     address:"Admin address",
//     isAdmin: true
// }];

// beforeEach(async () => {
//     await User.create(data)
//   })
let movie = {
    movies:async(req,res)=>{
     try {
        Movie.paginate({}, { offset: 20, limit: 10 },(err,response)=>{
            if(err) {
                console.log(err)
            }
            else{
                res.send(response)
            }
        })
        } catch (error) {
            res.send(error.message)
         }
        },

    create: async (req, res)=> {
           try {
               
            let movie_id = await `${randomstring.generate({
                length: 5,
                charset: "numeric",
              })}${Date.now()}`;
            const {title,cast,crew} = req.body; 
            const result=await new Movie({movie_id,title,cast,crew});
            result.save(function(error,response){
                if(response && !error){ 
                 movie.movies()
                }

              })
            
             }
           catch (error) {
            res.send(error)

           }
    },
    getOne: async (req,res)=>{
        try {
            const {_id}=req.params.id;
            Movie.findOne({_id},(err,movie)=>{
            if(!err && movie){
                res.send(moviem )
            }
            else{
                 res.sende(err);
            }
            });
          }
          catch (error) { console.log(error)}
    },
    delete: async (req,res)=>{
        try {
            const _id=req.params.id;
            Movie.deleteOne({_id},(err,movie)=>{
            if(!err && movie){
                res.send(movie )
            }
            else{
                 res.sende(err);
            }
            });
          }
          catch (error) {
            res.send(error.message);

          }
    },
    update: async (req,res)=>{
        try {
            let _id=req.params.id
            let {key,value} = req.body;
            var updateing = {$set:{}};    
                updateing.$set[key] = value;
            
            Movie.updateOne({_id},updateing,(err,result)=>{
                if(err){
                  console.log(err)
                }
                else{
                    console.log(result)
                    res.send(result)
                }
            })
           
          }
          catch (error) {
            res.send(error.message);

          }
    },

  
// function startCountDownTimer(){
	
// }
    


};
module.exports = movie;