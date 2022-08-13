const { Schema, Types, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      
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

userSchema.vitural('friendCount').get(function)
  return this.friends.length;
})

const users = model('users, usersSchema');

module.exports = assignmentSchema;
