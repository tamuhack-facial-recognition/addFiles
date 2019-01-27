'use strict';
var readlineSync = require('readline-sync');

const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = 'fbd46b617b604099b8a85f9f17587013';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://southcentralus.api.cognitive.microsoft.com/face/v1.0/largefacelists/{largeFaceListId}/persistedfaces';

var pict = readlineSync.question('What picture do you want to upload? (jpg url): ')
    const imageUrl =
        pict;

// Request parameters.
const params = {
    'largeFaceListId': 'waterman_tamuhack1',
    'userData': imageUrl,
    
};

const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
  console.log('JSON Response\n');
  console.log(jsonResponse);
});