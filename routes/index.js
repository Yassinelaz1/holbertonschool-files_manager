import AuthController from '../controllers/AuthController';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import FilesController from '../controllers/FilesController';

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
  paths.post('/files', ((req, resp) => FilesController.postUpload(req, resp)));
  paths.get('/files/:id', ((req, resp) => FilesController.getShow(req, resp)));
  paths.get('/files', ((req, resp) => FilesController.getIndex(req, resp)));
  paths.put('/files/:id/publish', ((req, resp) => FilesController.putPublish(req, resp)));
  paths.put('/files/:id/unpublish', ((req, resp) => FilesController.putUnpublish(req, resp)));
  paths.get('/files/:id/data', ((req, resp) => FilesController.getFile(req, resp)));
};

export default router;
