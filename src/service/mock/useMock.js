module.exports = function (app) {
  app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' })
  })
}