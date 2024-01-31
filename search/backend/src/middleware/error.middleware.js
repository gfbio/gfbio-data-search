function errorMiddleware(err, req, res, next) {
  // Log the error stack for debugging
  console.error(err.stack);

  // Set HTTP status code
  const statusCode = err.statusCode || 500;

  // Set response content
  const message = err.message || "Internal Server Error";

  // Include the error stack trace in the response for debugging
  const errorDetails =
    process.env.NODE_ENV === "production" ? undefined : err.stack;

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    error: errorDetails, // Include the error stack trace (if not in production)
  });
}

module.exports = errorMiddleware;
