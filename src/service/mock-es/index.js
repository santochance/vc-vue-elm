import shopDetails from './shopDetails'
import menu from './menu'

import commentsOverview from './comments/overview'
import tagAll from './comments/tag-all'
import tagSatisfied from './comments/tag-satisfied'
import tagUnsatisfied from './comments/tag-unsatisfied'
import tagWithPic from './comments/tag-with-pic'
import tagTasteGood from './comments/tag-taste-good'
import tagFastDelivery from './comments/tag-fast-delivery'

import addressList from './address'
import checkout from './checkout'
import remarkList from './remarkList'

const tagMap = {
  '全部': tagAll,
  '满意': tagSatisfied,
  '不满意': tagUnsatisfied,
  '有图': tagWithPic,
  '味道好': tagTasteGood,
  '送货快': tagFastDelivery,
}

export default {
  'GET /users/current': { id: 123456, username: 'Vincent' },
  'GET /restaurants/:id': shopDetails,
  'GET /restaurants/:id/menu': menu,
  'GET /restaurants/:id/ratings': function () {
    const overview = Object.keys(commentsOverview).reduce((rst, field) => {
      let entity = commentsOverview[field];
      return {
        ...rst,
        [field]: entity.code === 200 ? JSON.parse(entity.body) : null,
      }
    }, {})

    return overview
  },
  'GET /restaurants/:id/comments': function (req) {
    const { tag_name: tagName, offset } = req.query

    const tags = JSON.parse(commentsOverview.tags.body);
    const source = tagMap[tagName]

    const tag = tags.find(tag => tag.name === tagName)
    const count = tag ? tag.count : 0

    let result
    // offset大于或等于总数是返回 []
    result = offset < count ? source : []

    return result
  },
  'GET /restaurants/:id/remarks': remarkList,
  'GET /addresses': addressList,
  'POST /checkout': checkout,
}


