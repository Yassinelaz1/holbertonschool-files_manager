import AuthController from '../controllers/AuthController';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const express = require('express');

const router = (app) => {
  const paths = express.Router();
  app.use(express.json());
  app.use('/', paths);

  paths.get('/status', ((req, resp) => AppController.getStatus(req, resp)));
  paths.get('/stats', ((req, resp) => AppController.getStats(req, resp)));
  paths.post('/users', ((req, resp) => UsersController.postNew(req, resp)));
  paths.get('/connect', ((req, resp) => AuthController.getConnect(req, resp)));
  paths.get('/disconnect', ((req, resp) => AuthController.getDisconnect(req, resp)));
  paths.get('/users/me', ((req, resp) => UsersController.getMe(req, resp)));
};

export default router;
