const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const s3_get_object = async (req, res) => {
  const params = {
    Bucket: process.env.ImageBucket,
    Key: "image/office_logo.png",
  };
  try {
    const s3_data = await s3.getObject(params).promise();
    console.log("S3 Data ", s3_data.ContentType);
    return res.status(200).json(s3_data.ContentType);
  } catch (error) {
    console.error("Get Object from S3 :", error);
    return res.status(500).json(error);
  }
};

module.exports = s3_get_object;
