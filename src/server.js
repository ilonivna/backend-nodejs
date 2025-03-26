import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
// MAKE SURE FILE EXT IS NOT MISSING
import { getEnvVar } from './utils/getEnvVar.js';
import usersRouter from "./routers/users.js";
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from "./middlewares/notFoundHandler.js";

const PORT = Number(getEnvVar('PORT', '3000'));

// const PORT = 3000;
export const startServer = () => {
    const app = express();

    //built-in Express MW for parsing request body
        app.use(express.json());

    //MW for CORS access
    app.use(cors());


    //library MW for request logging
    app.use(
        pino({
          transport: {
            target: 'pino-pretty',
          },
        }),
      );

    //MW for time logging
    app.use((req, res, next) => {
      console.log(`Date: ${new Date().toLocaleString()}`);
      next();
    });


    //request handler for GET requests at path "/"
    app.get('/', (req, res) => {
      res.json({
        message: 'Hello there, Pigg',
      });
    });

    //controller for /users /users/:id
    app.use(usersRouter);

    //route not found MW
    app.use('*', notFoundHandler);


    //Error MW
    app.use(errorHandler);


    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });

};

