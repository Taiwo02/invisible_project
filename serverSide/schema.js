let mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema
// let movie_schema = new Schema({
    //     movie_id:{type:Number,required:true,},
    //     title:{type:String,required:true,},
    //     cast:{type:Array,default:null},
    //     crew:{type:Array,default:null}
    // })
    const movie_schema = new Schema({}, { strict: false });
    movie_schema.plugin(mongoosePaginate)
let movie = mongoose.model('movies', movie_schema);
module.exports = movie;