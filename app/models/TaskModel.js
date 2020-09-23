/**
 *  LoggerModel
 */

import mongoose, {Schema} from 'mongoose'

const TaskSchema = Schema({
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

TaskSchema.statics = {
    async save(data = {}) {
        const result = await this.create(data);
        return result
    },
    async list(data = {}) {
        const result = await this.create(data);
        return result
    },
}

const TaskModel = mongoose.model('Task', UserSchema);

export default TaskModel
