import { ErrorRequestHandler } from "express";
const errorController: ErrorRequestHandler = (err, req, res, next) => {
  console.log("ERR", err);
  res.status(err.statusCode || 500).json({
    status: "failure",
    message: err.message || "Internal Server Error",
  });
};

export default errorController;
