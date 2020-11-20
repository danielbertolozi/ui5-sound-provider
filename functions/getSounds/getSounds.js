const fetch = require('node-fetch')
const fs = require("fs");

const handler = async function () {
  try {
    //const response = await fetch('https://icanhazdadjoke.com', {
//      headers: { Accept: 'application/json' },
 //   })
	const contents = fs.readFileSync(require.resolve("./SAPUI5.mp3"));

    return {
      statusCode: 200,
	  headers: {
		"Access-Control-Allow-Origin": "*"
	  },
      body: contents,
    }
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
