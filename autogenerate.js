// See https://github.com/Marak/faker.js for API
var faker = require('faker');

module.exports = function(){
  var data = {users: []};

  for(var i = 0; i < 1000; i++){
    data.users.push({
      id:i,
      info: faker.helpers.createCard()
    });
  }

  return data;
}
