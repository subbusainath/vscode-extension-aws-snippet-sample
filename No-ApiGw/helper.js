const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const s3_get = async () => {
  const params = {
    Bucket: process.env.ImageBucket,
    Key: "image/office_logo.png",
  };
  try {
    const s3_data = await s3.getObject(params).promise();
    console.log("S3 Data ", s3_data);
    return s3_data.ETag;
  } catch (error) {
    console.error("Get Object from S3 :", error);
    return error.message;
  }
};

module.exports = s3_get;
