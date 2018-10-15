'use strict';
const soap = require('soap');
let url = 'http://localhost:3001/wsdl?wsdl';

async function sendRequest() {
  try {
  let client = await soap.createClientAsync(url);

  let args = {
    message: "id1:12:34:56:out42",
    splitter: ":"
  };
  let result = await client.MessageSplitterAsync(args);
  console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
}

sendRequest();
