const request = require('request');

const breedName = process.argv[2];

let userURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(userURL, (error, respond, body) => {
  if (error) {
    console.log('error: ',error);
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log('breed not found');
  }
});