const useMock = require('./src/service/mock/useMock')

module.exports = {
  devServer: {
    before: useMock,
  },
}