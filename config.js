const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const config = {
  port: process.env.PORT || 3000,
};
// left a breadcrumb
// small cleanup
// cleaner this way

module.exports = config;