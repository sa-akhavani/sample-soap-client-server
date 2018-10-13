'use strict';
const soap = require('soap');
const express = require('express');
const fs = require('fs');
const xmlFile = fs.readFileSync('service.wsdl', 'utf8');
const app = express();
const port = 3001;
const wsdl_path = "/wsdl";

function splitter_function(args) {
  console.log('splitter_function');
  var splitter = args.splitter;
  var splitted_msg = args.message.split(splitter);
  var result = [];
  for (var i = 0; i < splitted_msg.length; i++) {
    result.push(splitted_msg[i]);
  }
  return {
    result: result
  }
}

let serviceObject = {
  MessageSplitterService: {
    MessageSplitterServiceSoapPort: {
      MessageSplitter: splitter_function
    },
    MessageSplitterServiceSoap12Port: {
      MessageSplitter: splitter_function
    }
  }
};

app.listen(port, () => {
  console.log('Listening on port ' + port);
  soap.listen(app, wsdl_path, serviceObject, xmlFile);
  console.log('Check http://localhost:" + port + wsdl_path + "?wsdl');
});
