import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
// MAKE SURE FILE EXT IS NOT MISSING
import { getEnvVar } from './utils/getEnvVar.js';
import { getAllUsers, getUsersById } from './services/users.js';


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

    //GET all users
    app.get('/users', async (req, res) => {
      const users = await getAllUsers();
      res.status(200).json({
        message: "Successfully fetched all users from DB",
        data: users,
      });
    });


    //GET a user by ID
    app.get("/users/:userId", async (req, res) => {
      const userId = req.params;
      const user = await getUsersById(userId);

      if (!user) {
        res.status(404).json({
          message: "User not found, really sorry..."
        });
        return;
      }

      res.status(200).json({
        message: "User found! Congrats!",
        data: user,
      });
    });


    //route not found MW
    app.use('*', (req, res, next) => {
      res.status(404).json({
        message: 'Route not found at all..',
      });
    });


    //Error MW
    app.use((err, req, res, next) => {
        res.status(500).json({
          message: 'Something went really wrong...',
          error: err.message,
        });
      });


    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });

};

