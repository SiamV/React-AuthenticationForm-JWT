const config = {
    port: 8090, //server port
    url: 'mongodb://localhost:27017/auth', //use your url to connect real DB
    secret: 'secret' //secret word for hash
  }
  
  module.exports = config;