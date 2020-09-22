import UserController from '../controller/Hook'
import Router from 'koa-router'

const Hook = new Router();

Hook.get('/hook', UserController.hook);

export default Hook
