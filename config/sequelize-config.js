const {
  database,
  username,
  password,
  port,
  host
} = require('./db-config')

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'mysql',
  },
  test: {
    username,
    password,
    database,
    host,
    dialect: 'mysql',
  },
  production: {
    username,
    password,
    database,
    host,
    dialect: 'mysql',
  },
};