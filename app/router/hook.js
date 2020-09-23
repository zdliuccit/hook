import UserController from '../controller/Hook'
import Router from 'koa-router'

const Hook = new Router();

Hook.post('/hook', UserController.hook);
Hook.get('/log', UserController.log);

export default Hook
