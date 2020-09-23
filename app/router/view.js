import ViewController from '../controller/View'
import Router from 'koa-router'

const Hook = new Router();

Hook.get('/', ViewController.index);

export default Hook
