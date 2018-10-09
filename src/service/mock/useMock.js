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
const checkout = require('./checkout')
const addressList = require('./address')
const remarkList = require('./remarkList')

const tagMap = {
  '全部': tagAll,
  '满意': tagSatisfied,
  '不满意': tagUnsatisfied,
  '有图': tagWithPic,
  '味道好': tagTasteGood,
  '送货快': tagFastDelivery,
}

function resWith(res, status = 200, delay = 500) {
  return function (payload) {
    setTimeout(() => {
      res.status(status).json(payload)
    }, delay)
  }
}

module.exports = function (app) {
  app.get('/hello', (req, res) => {
    resWith(res)({ message: 'Hello, world!' })
  })

  app.get('/users/current', (req, res) => {
    resWith(res)({ id: 123456, username: 'Vincent' })
  })

  app.get('/restaurants/:id', (req, res) => {
    resWith(res)(shopDetails)
  })

  app.get('/restaurants/:id/menu', (req, res) => {
    resWith(res)(menu)
  })

  app.get('/restaurants/:id/ratings', (req, res) => {
    const overview = Object.keys(commentsOverview).reduce((rst, field) => {
      let entity = commentsOverview[field];
      return {
        ...rst,
        [field]: entity.code === 200 ? JSON.parse(entity.body) : null,
      }
    }, {})

    resWith(res)(overview)
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

    resWith(res)(result)
  })

  app.get('/checkout', (req, res) => {
    res.json(checkout)
  })

  app.get('/addresses', (req, res) => {
    // const { user_id: userId } = req.query
    res.json(addressList)
  })

  app.get('/restaurant/:id/remarks', (req, res) => {
    res.json(remarkList)
  })
}