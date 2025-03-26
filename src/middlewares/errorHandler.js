import { HttpError } from "http-errors";


export const errorHandler = (err, req, res, next) => {
  // check if an error was received from createHttpError
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }


    res.status(500).json({
      status: 500,
      message: 'Something went really wrong...',
      data: err.message,

    });
};
