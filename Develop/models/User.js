const { Schema, Types, model} = require('mongoose');
const {format_date} = require('./');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
      
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    },
  },
  {
    toJSON: {
     viturals: true,
     getters: true,
    },
    id: false
  }
);
const Users = model('Users, UsersSchema');
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});
module.exports =User;
