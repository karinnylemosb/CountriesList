let GeneralErrorResponse = require("../exceptions/errorHandler")

module.exports.HttpError = (res, err) => {
  console.error("err =>", err );
  if (err instanceof GeneralErrorResponse) {
    const { statusCode: code, timestamp, error } = err;
    return res.status(code).send({
      status: "error",
      timestamp,
      code,
      error: error 
    });
  } else 
    return res.status(500).send({
      timestamp: new Date(),
      status: "error",
      code: 500,
      message: err.message,
    })
}