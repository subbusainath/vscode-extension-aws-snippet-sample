const s3_get = require("../No-ApiGw/helper");

module.exports.handler = async (event) => {
  console.log("actual event caused by s3:", event);

  const retrieved_data = await s3_get();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "successfully get the object from the bucket",
      s3_data: retrieved_data,
    }),
  };
};
