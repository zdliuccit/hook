/**
 *  LoggerModel
 */

import mongoose, {Schema} from 'mongoose'

const LogSchema = Schema({
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

LogSchema.statics = {
    async save(data = {}) {
        const result = await this.create(data);
        return result
    },
    async list(data = {}) {
        const result = await this.create(data);
        return result
    },
}

const LogModel = mongoose.model('Log', UserSchema);

export default LogModel
