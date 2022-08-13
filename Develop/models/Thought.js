const { Schema, model } = require('mongoose');
const Thought = require('./Thought.js');
const {format_date} = require('./');
const reactionSchema = require('./Reaction');
// Schema for thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createAt: {
      type: Date,
      default: Date.now,
      get: (time => format_date)(time) 
    },
    username: {
      type: String,
      required: true,
      
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
  const Thought = model('Thought', ThoughtSchema);
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
module.exports = Thought;

//Schema for reaction
const reactionSchema = new Schema({
  reactionId: {
    type: SVGUnitTypes.ObjectId,
    default: new SVGUnitTypes.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type:String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    get: (time => format_date)(time) 
  },
},
{
  toJSON: {
    getters: true,
  },
  id: false
}
);
module.exports = reaction;
