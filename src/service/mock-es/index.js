// import shopDetails from './shopDetails'
// import menu from './menu'

// import commentsOverview from './comments/overview'
// import tagAll from './comments/tag-all'
// import tagSatisfied from './comments/tag-satisfied'
// import tagUnsatisfied from './comments/tag-unsatisfied'
// import tagWithPic from './comments/tag-with-pic'
// import tagTasteGood from './comments/tag-taste-good'
// import tagFastDelivery from './comments/tag-fast-delivery'

import addressList from './address'
import checkout from './checkout'
import remarkList from './remarkList'

// import user from './user'
// import extraProfile from './extra_profile.js'

// import persistence from '@/util/persistence'

import newUserCheck from './index/new_user_check'
// import restaurants from './index/restaurants'
import location from './index/location'
// import batchFilter from './index/batch_filter.js'
// import reverseGeoCoding from './index/reverse_geo_coding'
// import entries from './index/entries'
// import banners from './index/banners'

// import searchNearby from './index/search_nearby'
// import cityList from './index/cityList'
// import batchShop from './shop/batch_shop'

// const tagMap = {
//   '全部': tagAll,
//   '满意': tagSatisfied,
//   '不满意': tagUnsatisfied,
//   '有图': tagWithPic,
//   '味道好': tagTasteGood,
//   '送货快': tagFastDelivery,
// }

// let loginedUser = { ...persistence.getItem('USER') }

// console.log('persistence:', persistence)

export default {

/* user */

  // 'GET /users/current': { id: 1731112177, username: '757f8734cc8' },
  // 'GET /users/:id': user,
  // 'GET /users/:id/extra_profile': extraProfile,
  // 'POST /users/:id/username': function (req) {
  //   const username = req.body.username
  //   user.username = username
  //   extraProfile.is_username_autogenerated = 0

  //   return { username }
  // },

/* login*/

  // 'GET https://h5.ele.me/restapi/eus/v1/current_user': () => loginedUser.user_id || 0,
  // 'GET https://h5.ele.me/restapi/eus/v3/users/:id': user,
  // 'GET https://h5.ele.me/restapi/eus/v1/users/:id/extra_profile': extraProfile,
  // 'POST https://h5.ele.me/restapi/eus/login/login_by_mobile': function () {
  //   loginedUser = user
  //   return {
  //     "need_bind_mobile": false,
  //     "user_id": loginedUser.user_id
  //   }
  // },
  // 'POST https://h5.ele.me/restapi/eus/login/logout': () => (loginedUser = {}),

/* shop */

  // 'GET https://h5.ele.me/pizza/shopping/restaurants/:id/batch_shop': batchShop,
  // 'GET https://h5.ele.me/pizza/ugc/restaurants/:id/batch_comments': overview,
  // 'GET https://h5.ele.me/restapi/ugc/v3/restaurants/:id/ratings': comments,

  // 'GET /restaurants/:id': shopDetails,
  // 'GET /restaurants/:id/menu': menu,
  // 'GET /restaurants/:id/ratings': function () {
  //   const overview = Object.keys(commentsOverview).reduce((rst, field) => {
  //     let entity = commentsOverview[field];
  //     return {
  //       ...rst,
  //       [field]: entity.code === 200 ? JSON.parse(entity.body) : null,
  //     }
  //   }, {})

  //   return overview
  // },
  // 'GET /restaurants/:id/comments': function (req) {
  //   const { tag_name: tagName, offset } = req.query

  //   const tags = JSON.parse(commentsOverview.tags.body);
  //   const source = tagMap[tagName]

  //   const tag = tags.find(tag => tag.name === tagName)
  //   const count = tag ? tag.count : 0

  //   let result
  //   // offset大于或等于总数是返回 []
  //   result = offset < count ? source : []

  //   return result
  // },
  'GET /restaurants/:id/remarks': remarkList,
  'GET /addresses': addressList,
  'POST /checkout': checkout,

  /* index */

  'GET https://h5.ele.me/restapi/eus/v2/new_user_check': newUserCheck,
  // 'GET https://h5.ele.me/restapi/shopping/v3/restaurants': restaurants ,
  'GET https://h5.ele.me/restapi/member/v2/users/:id/location': location,
  // 'GET https://h5.ele.me/pizza/shopping/restaurants/batch_filter': batchFilter,
  // 'GET https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding': reverseGeoCoding,
  // 'GET https://h5.ele.me/restapi/shopping/openapi/entries': entries,
  // 'GET https://h5.ele.me/restapi/shopping/v2/banners': banners,

  // 'GET https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay': searchNearby,
  // 'GET https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json': cityList,
}


