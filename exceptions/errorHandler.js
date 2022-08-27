class GeneralErrorResponse {
  constructor(statusCode, error) {
    this.timestamp = new Date();
    this.statusCode = statusCode;
    this.error = error;
  }
}
module.exports = GeneralErrorResponse;
