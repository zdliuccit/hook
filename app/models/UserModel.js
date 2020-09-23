/**
 * User model
 */

import mongoose, { Schema } from 'mongoose'

const UserSchema = Schema({
  mail: {
    type: String,
    unique: true,
    require: true
  },
  token: String,
  password: {
    type: String,
    require: true
  },
  lastLoginTime: {
    type: Date,
    default: Date.now
  }
});

UserSchema.statics = {
  async save(data = {}) {
    const result = await this.create(data);
    return result
  },
}

const UserModel = mongoose.model('User', UserSchema);

export default UserModel
