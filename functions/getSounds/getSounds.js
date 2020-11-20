const fetch = require('node-fetch')
const fs = require("fs");
const path = require("path");

const currentDir = process.env.LAMBDA_TASK_ROOT;

const handler = async function (event, context, callback) {
  try {
	const contents = fs.readFileSync(path.join(currentDir, "./SAPUI5.mp3"));

    return {
      statusCode: 200,
	  headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "audio/mpeg3"
	  },
      body: contents,
    };
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
