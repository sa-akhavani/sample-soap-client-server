'use strict';
const soap = require('soap');
let url = 'http://localhost:3001/wsdl?wsdl';

async function sendRequest() {
  try {
  let client = await soap.createClientAsync(url);

  let args = {
    firstName: "Seyed Ali",
    lastName: "Akhavani"
  };
  let result = await client.SayHelloAsync(args);
  console.log(result[0]);
  } catch (error) {
    console.log(error);
  }
}

sendRequest();
