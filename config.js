const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const config = {
  port: process.env.PORT || 3000,
};

module.exports = config;