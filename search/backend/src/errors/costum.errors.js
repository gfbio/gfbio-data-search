class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

// Export both error classes
module.exports = {
  BadRequestError,
};
