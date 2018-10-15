'use strict';
const soap = require('soap');
const express = require('express');
const fs = require('fs');
const xmlFile = fs.readFileSync('service.wsdl', 'utf8');
const app = express();
const port = 3001;
const wsdl_path = "/wsdl";

function sayHello(args) {
  console.log('Function SayHello Called:');
  console.log(args.firstName, '-', args.lastName);
  return 'Hello ' + args.firstName + '-' + args.lastName;
}

let serviceObject = {
  SayHelloService: {
    SayHelloServiceSoapPort: {
      SayHello: sayHello
    }
  }
};

app.listen(port, () => {
  console.log('Listening on port ' + port);
  soap.listen(app, wsdl_path, serviceObject, xmlFile);
  console.log('Check http://localhost:' + port + wsdl_path + '?wsdl');
});
