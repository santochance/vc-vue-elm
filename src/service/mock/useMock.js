const shopDetails = require('./shopDetails')
const menu = require('./menu')
const {
  commentsOverview,
  tagAll,
  tagSatisfied,
  tagUnsatisfied,
  tagWithPic,
  tagTasteGood,
  tagFastDelivery,
} = require('./comments')

const tagMap = {
  '全部': tagAll,
  '满意': tagSatisfied,
  '不满意': tagUnsatisfied,
  '有图': tagWithPic,
  '味道好': tagTasteGood,
  '送货快': tagFastDelivery,
}

module.exports = function (app) {
  app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' })
  })

  app.get('/restaurants/:id', (req, res) => {
    res.json(shopDetails)
  })

  app.get('/restaurants/:id/menu', (req, res) => {
    res.json(menu)
  })

  app.get('/restaurants/:id/ratings', (req, res) => {
    const overview = Object.keys(commentsOverview).reduce((rst, field) => {
      let entity = commentsOverview[field];
      return {
        ...rst,
        [field]: entity.code === 200 ? JSON.parse(entity.body) : null,
      }
    }, {})

    res.json(overview)
  })

  app.get('/restaurants/:id/comments', (req, res) => {
    const { tag_name: tagName, offset } = req.query

    const tags = JSON.parse(commentsOverview.tags.body);
    const source = tagMap[tagName]

    const tag = tags.find(tag => tag.name === tagName)
    const count = tag ? tag.count : 0

    let result
    // offset大于或等于总数是返回 []
    result = offset < count ? source : []

    res.json(result)
  })
}