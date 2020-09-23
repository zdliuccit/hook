import ViewController from '../controller/View'
import Router from 'koa-router'

const Hook = new Router();

Hook.get('/', ViewController.index);
Hook.get('/log', ViewController.log);

export default Hook
